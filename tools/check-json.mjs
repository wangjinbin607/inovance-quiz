#!/usr/bin/env node
/**
 * 题库 JSON 体检与修复工具
 *
 *   node tools/check-json.mjs            # 检查 data/ 下全部题库文件
 *   node tools/check-json.mjs --fix      # 自动修复字符串内的非法控制字符
 *   node tools/check-json.mjs --fix data/hmi-2.json   # 只处理指定文件
 *
 * 背景：用 PowerShell 的 Set-Content / Out-File 改写 UTF-8 中文 JSON 时，
 *       容易在字符串字面量里引入真实的换行或制表符（JSON 规范要求写成 \n / \t），
 *       导致 JSON.parse 报 "Bad control character in string literal"。
 *       本工具定位并修复这类问题，避免整批题库因一个字符而无法使用。
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data');
const doFix = process.argv.includes('--fix');
const explicit = process.argv.slice(2).filter((a) => !a.startsWith('--'));

/** 扫描字符串字面量内的非法控制字符，返回 [{line, col, char, index}] */
function findBadControls(text) {
  const bad = [];
  let inString = false, escaped = false, line = 1, col = 0;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '\n') { line++; col = 0; } else { col++; }
    if (inString) {
      if (escaped) { escaped = false; continue; }
      if (c === '\\') { escaped = true; continue; }
      if (c === '"') { inString = false; continue; }
      const code = c.charCodeAt(0);
      if (code < 0x20) bad.push({ line, col, char: c, code, index: i });
    } else if (c === '"') {
      inString = true;
    }
  }
  return bad;
}

/** 把字符串内的控制字符替换为合法转义 */
function fixControls(text) {
  let out = '';
  let inString = false, escaped = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      if (escaped) { escaped = false; out += c; continue; }
      if (c === '\\') { escaped = true; out += c; continue; }
      if (c === '"') { inString = false; out += c; continue; }
      const code = c.charCodeAt(0);
      if (code < 0x20) {
        if (c === '\n') { out += '\\n'; continue; }
        if (c === '\r') { out += '\\r'; continue; }
        if (c === '\t') { out += '\\t'; continue; }
        out += '\\u' + code.toString(16).padStart(4, '0');
        continue;
      }
      out += c;
    } else {
      if (c === '"') inString = true;
      out += c;
    }
  }
  return out;
}

const CCP = { '\n': '\\n', '\r': '\\r', '\t': '\\t' };

const files = explicit.length
  ? explicit.map((f) => (path.isAbsolute(f) ? f : path.join(root, f)))
  : fs.readdirSync(dataDir).filter((f) => f.endsWith('.json')).map((f) => path.join(dataDir, f));

console.log('\n══════ 题库 JSON 体检 ══════');
let okCount = 0, badCount = 0, fixedCount = 0;

for (const file of files) {
  const rel = path.relative(root, file);
  if (!fs.existsSync(file)) { console.log(`  × ${rel} 不存在`); badCount++; continue; }
  const raw = fs.readFileSync(file, 'utf8');
  const name = path.basename(file);

  let parsedOK = true, parseErr = null;
  try { JSON.parse(raw); } catch (e) { parsedOK = false; parseErr = e.message; }

  const bad = findBadControls(raw);
  const bom = raw.charCodeAt(0) === 0xFEFF;
  const crlf = raw.includes('\r\n');

  if (parsedOK && !bad.length && !bom) {
    const n = JSON.parse(raw).length;
    console.log(`  ✓ ${name.padEnd(18)}${String(n).padStart(3)} 题` +
      (crlf ? '  （注意：含 CRLF 换行，建议统一为 LF）' : ''));
    okCount++;
    continue;
  }

  badCount++;
  console.log(`  × ${name}`);
  if (bom) console.log('      · 含 BOM，应去掉');
  if (parseErr) console.log('      · 解析失败：' + parseErr);
  if (bad.length) {
    console.log(`      · 字符串内非法控制字符 ${bad.length} 处：`);
    bad.slice(0, 8).forEach((b) => {
      console.log(`          行 ${b.line} 列 ${b.col}　字符 ${CCP[b.char] || '\\u' + b.code.toString(16).padStart(4, '0')}`);
    });
    if (bad.length > 8) console.log(`          … 其余 ${bad.length - 8} 处省略`);
  }

  if (doFix) {
    let fixedText = fixControls(raw);
    if (bom) fixedText = fixedText.replace(/^\uFEFF/, '');
    try {
      const list = JSON.parse(fixedText);
      fs.writeFileSync(file, JSON.stringify(list, null, 2) + '\n', 'utf8');
      console.log(`      → 已修复并重写（${list.length} 题，UTF-8 无 BOM）`);
      fixedCount++;
    } catch (e) {
      console.log(`      → 修复后仍无法解析：${e.message}`);
      console.log('        该文件可能还有其它结构问题，请人工检查');
    }
  }
}

console.log('\n─────────────────────────────');
console.log(`  正常 ${okCount} 个 · 有问题 ${badCount} 个` + (doFix ? ` · 已修复 ${fixedCount} 个` : ''));
if (badCount && !doFix) console.log('  提示：加 --fix 参数可自动修复控制字符问题');
console.log('');
process.exit(badCount && !doFix ? 1 : 0);
