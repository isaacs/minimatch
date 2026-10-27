all: bench

bench: filenames.json patterns.json
	node index.js

patterns.json: gen-patterns.js patterns.txt
	node gen-patterns.js

filenames.json: gen-filenames.js
	node gen-filenames.js
