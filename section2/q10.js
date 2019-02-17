const fs = require('fs')

const wc = (filename) => fs.readFileSync(filename, 'utf-8')
						.split('\n')
						.filter( (d) => d )
						.length

console.log(wc(process.argv[2]))
