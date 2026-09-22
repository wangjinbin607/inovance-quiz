#!/usr/bin/env node
/**
 * 题库「适用人群」模型迁移脚本
 *
 * 迁移规则：
 *   1) 角色别名归一：service / tech / support → engineer，buyer / procurement → purchase
 *   2) 主观题（short / scenario）剥离 sales、purchase —— 销售与采购只考查客观题
 *   3) 客观题按关键词（选型参数、型号命名、规格、认证、功率/电压/电流、防护等级等）补 purchase 标注
 *   4) 人群为空时兜底为 engineer；人群顺序统一为 sales → engineer → purchase → partner
 *
 * 用法：
 *   node tools/migrate-roles.mjs --dry     仅统计，不写盘
 *   node tools/migrate-roles.mjs           写回 data/*.json
 */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const root = path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), '..');
const dataDir = path.join(root, 'data');
const dry = process.argv.includes('--dry');

const ROLES = ['sales', 'engineer', 'purchase', 'partner'];
const ALIAS = {
  service: 'engineer', tech: 'engineer', technical: 'engineer', support: 'engineer', fa: 'engineer',
  buyer: 'purchase', procurement: 'purchase', purchasing: 'purchase',
};
const OBJECTIVE = ['single', 'multi', 'judge', 'fill'];
// 采购关注点：型号命名、选型与规格参数、功率/电压/电流等关键指标、防护等级与认证、尺寸重量
const PURCHASE_HINT = /型号|命名|选型|规格|参数|功率|电压|电流|容量|机座|防护等级|认证|货期|尺寸|重量/;

const stat = { files: 0, total: 0, alias: 0, stripped: 0, addedPurchase: 0, empty: 0 };
const changed = [];

for (const f of fs.readdirSync(dataDir).filter((x) => x.toLowerCase().endsWith('.json')).sort()) {
  const full = path.join(dataDir, f);
  const raw = fs.readFileSync(full, 'utf8').replace(/^\ufeff/, '');
  let arr;
  try {
    arr = JSON.parse(raw);
  } catch (e) {
    console.error(`× ${f} JSON 解析失败：${e.message}`);
    process.exitCode = 1;
    continue;
  }
  if (!Array.isArray(arr)) {
    console.error(`× ${f} 顶层不是数组`);
    process.exitCode = 1;
    continue;
  }
  stat.files++;
  let fileChanged = false;

  for (const q of arr) {
    if (!q || typeof q !== 'object') continue;
    stat.total++;
    const before = JSON.stringify(q.roles || []);
    let roles = Array.isArray(q.roles) ? q.roles.slice() : [];

    // 1) 别名归一
    roles = roles.map((r) => {
      const n = ALIAS[String(r).toLowerCase()] || String(r).toLowerCase();
      if (n !== r) stat.alias++;
      return n;
    });

    // 去重 + 白名单
    roles = [...new Set(roles)].filter((r) => ROLES.includes(r));

    // 2) 主观题剥离 sales / purchase
    if (!OBJECTIVE.includes(q.type)) {
      const n = roles.length;
      roles = roles.filter((r) => r !== 'sales' && r !== 'purchase');
      if (roles.length !== n) stat.stripped += n - roles.length;
    }

    // 3) 客观题按关键词补 purchase（只看题干与标签，避免解析中的泛化描述造成虚高）
    if (OBJECTIVE.includes(q.type) && !roles.includes('purchase')
      && PURCHASE_HINT.test(String(q.stem || '') + ' ' + (Array.isArray(q.tags) ? q.tags.join(' ') : ''))) {
      roles.push('purchase');
      stat.addedPurchase++;
    }

    // 4) 兜底
    if (!roles.length) {
      roles = ['engineer'];
      stat.empty++;
    }

    roles = ROLES.filter((r) => roles.includes(r)); // 稳定顺序
    q.roles = roles;
    if (JSON.stringify(q.roles) !== before) {
      fileChanged = true;
      changed.push(`${q.id}\t${before} → ${JSON.stringify(q.roles)}`);
    }
  }

  if (fileChanged && !dry) fs.writeFileSync(full, JSON.stringify(arr, null, 2) + '\n', 'utf8');
}

console.log(`扫描文件 ${stat.files} 个，题目 ${stat.total} 道`);
console.log(`别名归一 ${stat.alias} 处 | 主观题剥离 sales/purchase ${stat.stripped} 处 | 客观题补 purchase ${stat.addedPurchase} 处 | 空人群兜底 ${stat.empty} 处`);
console.log(`人群发生变更的题目 ${changed.length} 道${dry ? '（dry-run，未写盘）' : '（已写回 data/*.json）'}`);
if (changed.length && changed.length <= 60) console.log(changed.join('\n'));
