import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

const staticExtensions = new Set(['.svg', '.jpg', '.jpeg', '.png', '.css', '.js', '.woff2', '.woff', '.json']);

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
  const safePath = path.normalize(relativePath);
  const filePath = path.join(staticRoot, safePath);
  const relative = path.relative(staticRoot, filePath);

  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    return false;
  }

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

  if (staticExtensions.has(path.extname(url.pathname))) {
    const served = await tryServeStatic(url.pathname, res);
    if (served) return;
  }

  const headers = new Headers();
  Object.entries(req.headers).forEach(([key, value]) => {
    if (!value) return;
    if (Array.isArray(value)) {
      value.forEach((v) => headers.append(key, v));
    } else {
      headers.set(key, value);
    }
  });

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
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
