const fs = require('fs')

const tsv2ssv = (filename) => {
	let l = []
	fs.readFileSync(filename, 'utf-8').split('\n')
								.filter( (d) => d )
								.map( (d) => l.push(d.replace(/\t/g, ' ')) )
	return l
}

let l = tsv2ssv(process.argv[2])
console.log(l.join('\n'))
