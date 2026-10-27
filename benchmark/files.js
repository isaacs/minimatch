const files = new Set()

const sets = [
  'abcd',
  'efgh',
  'ijlk',
  'mnop',
  'qrst',
  'uvwx',
]

const explode = (head, tail) => {
  if (!tail.length) {
    files.add(head)
    return
  }

  const chop = tail.slice(1)
  for (const i of tail[0]) {
    explode(head + i, chop)
    explode(head + '/' + i, chop)
    explode(head + '/.' + i, chop)
  }
}

explode('', sets)
