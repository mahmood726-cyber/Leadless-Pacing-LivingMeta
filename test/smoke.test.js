/* Offline smoke test for the Leadless-Pacing LivingMeta dashboard.
 * No external dependencies — run with: node test/smoke.test.js
 * Guards the regression classes that matter for this single-file HTML app:
 *  - shipped dashboard exists and is non-trivial
 *  - <script>/</script> tags balance (no literal </script> breaking a template literal)
 *  - no BOM and no unfilled placeholder tokens in shipped assets
 *  - the index redirect target actually exists
 *  - the core meta-analysis engine functions are present
 *  - no hardcoded local machine paths in tracked, shipped files
 */
'use strict';
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
let failures = 0;
let checks = 0;
function ok(cond, msg) {
  checks++;
  if (!cond) { failures++; console.error('  FAIL: ' + msg); }
  else { console.log('  ok: ' + msg); }
}

const dash = 'LEADLESS_PACING_REVIEW.html';
const dashPath = path.join(root, dash);

ok(fs.existsSync(dashPath), dash + ' exists');
const html = fs.readFileSync(dashPath, 'utf8');
ok(html.length > 100000, dash + ' is non-trivial (>100k chars)');

// BOM check on shipped HTML
ok(html.charCodeAt(0) !== 0xFEFF, dash + ' has no UTF-8 BOM');

// <script> / </script> tag balance
const openScripts = (html.match(/<script[\s>]/g) || []).length;
const closeScripts = (html.match(/<\/script>/g) || []).length;
ok(openScripts === closeScripts,
  '<script> tags balance (' + openScripts + ' open / ' + closeScripts + ' close)');

// No unfilled placeholder tokens (regex assembled from parts so this test
// file does not itself contain the literal token strings)
var placeholderRe = new RegExp(
  ['\\{\\{[a-zA-Z_]+\\}\\}', 'REPLACE' + '_ME', '__PLACE' + 'HOLDER__'].join('|'));
ok(!placeholderRe.test(html), 'no unfilled placeholder tokens in ' + dash);

// Core meta-analysis engine functions present
['function pauleMandelTau2', 'function poolWith', 'function perTrialEffects',
 'function binaryEffect', 'function hrFromPublished'].forEach(function (fn) {
  ok(html.indexOf(fn) !== -1, 'engine contains ' + fn);
});

// index.html redirect target resolves
const indexPath = path.join(root, 'index.html');
ok(fs.existsSync(indexPath), 'index.html exists');
const index = fs.readFileSync(indexPath, 'utf8');
const m = index.match(/url=\.?\/?([A-Za-z0-9_./-]+\.html)/);
ok(m && fs.existsSync(path.join(root, m[1])),
  'index.html redirect target exists (' + (m ? m[1] : 'none') + ')');

// No hardcoded local machine paths in tracked shipped/config files
const noPath = /([A-Za-z]:\\\\?Users|\/home\/[a-z]|[A-Za-z]:\\\\Projects)/;
['configs/leadless_pacing.json', 'index.html'].forEach(function (rel) {
  const p = path.join(root, rel);
  if (!fs.existsSync(p)) return;
  ok(!noPath.test(fs.readFileSync(p, 'utf8')),
    'no hardcoded local path in ' + rel);
});

console.log('\n' + (checks - failures) + '/' + checks + ' checks passed');
if (failures) { console.error(failures + ' FAILED'); process.exit(1); }
console.log('SMOKE OK');
