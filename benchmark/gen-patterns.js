const fs = require('fs')
const patterns = fs.readFileSync(__dirname + '/patterns.txt', 'utf8')
  .trim()
  .replace(/[\n\r]+/g, '\n').split('\n')
  .map(p => p.trim())
  .filter(p => p && !/^#/.test(p))

fs.writeFileSync(__dirname + '/patterns.json', JSON.stringify(patterns, 0, 2) + '\n')
