import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticRoot = path.join(__dirname, '../dist/client');
let server;

const contentTypeMap = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.json': 'application/json; charset=utf-8',
};

function contentTypeFor(filePath) {
  return contentTypeMap[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
}

async function getServer() {
  if (!server) {
    const imported = await import(path.join(__dirname, '../dist/server/server.js'));
    server = imported.default ?? imported;
  }
  return server;
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  if (!chunks.length) return null;
  return Buffer.concat(chunks);
}

async function tryServeStatic(pathname, res) {
  const relativePath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  const filePath = path.join(staticRoot, path.normalize(relativePath));
  if (!filePath.startsWith(staticRoot + path.sep) && filePath !== staticRoot) return false;

  try {
    const data = await fs.readFile(filePath);
    res.statusCode = 200;
    res.setHeader('content-type', contentTypeFor(filePath));
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  const url = new URL(req.url || '/', `${protocol}://${host}`);

  if (url.pathname.startsWith('/assets/') || url.pathname === '/favicon.svg' || url.pathname === '/profile.jpg') {
    const served = await tryServeStatic(url.pathname, res);
    if (served) return;
  }

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (!value) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }

  const body = await readBody(req);
  const requestInit = {
    method: req.method,
    headers,
    body: body?.length ? body : undefined,
  };

  const request = new Request(url.toString(), requestInit);
  const serverEntry = await getServer();
  const response = await serverEntry.fetch(request);

  res.statusCode = response.status;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
