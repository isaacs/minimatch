const files = new Set()

const sets = 'abcdefg'

const explode = (head, tail) => {
  if (!tail.length) {
    files.add(head)
    return
  }

  const chop = tail.slice(1)
  for (const i of tail) {
    try {
      explode(head + i, chop)
      const s = head === '' ? head : (head + '/')
      explode(s + i, chop)
      explode(s + '.' + i, chop)
    } catch (e) {
      return
    }
  }
}

explode('', sets)

const fs = require('fs')
fs.writeFileSync(__dirname + '/filenames.json', JSON.stringify([...files], 0, 2) + '\n')
