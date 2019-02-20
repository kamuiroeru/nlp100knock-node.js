const fs = require('fs')
const q12 = require('./q12.js')
const write = q12.write

let filearr = process.argv.slice(2)
				.map( (d) => fs.readFileSync(d, 'utf-8').split('\n').filter( (d) => d ) )
let maxrow = Math.max(...filearr.map( (d) => d.length ))
let col = filearr.length

let out_lines = []
let line_words = [], word
for (let i=0; i < maxrow; i++) {
	line_words = []
	for (let j=0; j < col; j++) {
		word = filearr[j][i]
		line_words.push(word === undefined ? "": word)
	}
	out_lines.push(line_words.join('\t'))  // タブで結合
}

write('out13.tsv', out_lines.join('\n') + '\n')
