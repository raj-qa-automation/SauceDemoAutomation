const fs = require('fs');
const path = './pages/InventoryPage.js';
const txt = fs.readFileSync(path, 'utf8');
const firstLine = txt.split(/\r?\n/)[0] || '';
for (let i = 0; i < firstLine.length; i++) {
  const ch = firstLine[i];
  const code = ch.codePointAt(0);
  // show a visible representation for whitespace
  const repr = (ch === ' ') ? '<SPACE>' : (ch === '\t' ? '<TAB>' : ch);
  console.log(`${i+1}\tU+${code.toString(16).toUpperCase().padStart(4,'0')}\t${repr}`);
}
if (firstLine.length === 0) console.log('<empty first line>');
