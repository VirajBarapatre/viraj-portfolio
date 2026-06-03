import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let server;

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

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  const url = new URL(req.url || '/', `${protocol}://${host}`);

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
