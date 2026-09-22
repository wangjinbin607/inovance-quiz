#!/usr/bin/env node
/**
 * 本地静态服务器（零依赖）
 *   node tools/serve.mjs [端口]       默认 8080
 * 用于本地预览与企业内网部署前的验证；生产环境可直接用 Nginx / IIS 托管静态文件。
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const port = Number(process.argv[2] || process.env.PORT || 8080);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.csv': 'text/csv; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    res.writeHead(400).end('Bad Request');
    return;
  }
  if (pathname === '/') pathname = '/index.html';
  let filePath = path.join(root, pathname);

  // 防目录穿越
  if (!filePath.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
    return;
  }
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404</h1><p>未找到：' + pathname + '</p><p><a href="/">返回首页</a></p>');
      return;
    }
    res.writeHead(200, {
      'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache'
    });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log('');
  console.log('  汇川产品刷题工具 · 本地服务已启动');
  console.log('  ─────────────────────────────────────────');
  console.log(`  刷题端：   http://localhost:${port}/index.html`);
  console.log(`  管理后台： http://localhost:${port}/admin.html`);
  console.log(`  目录：     ${root}`);
  console.log('');
  console.log('  提示：也可直接双击 index.html 以 file:// 方式打开（无需服务器）。');
  console.log('  按 Ctrl+C 停止服务。');
  console.log('');
});
