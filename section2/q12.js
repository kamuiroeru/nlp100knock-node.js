const fs = require('fs')

// writeFileにコールバック関数が必須になったらしく…
const write = (filename, datastr) => {
	fs.writeFile(filename, datastr,
		 (err, result) => {if (err) console.log('error', err)}
	)
}
module.exports.write = write

const split_save = (filename, sep='\t') => {
	let dict = {}, col
	for (let line_arr of fs.readFileSync(filename, 'utf-8').split('\n')
							.filter( (d) => d ).map( (line) => line.split(sep) )) {
		line_arr.forEach( (d, lc) => {
			col = lc + 1
			if (!(col in dict)) {
				dict[col] = []
			}
			dict[col].push(d)
		})
	}
	console.log(dict)
	for (let key in dict) {
		console.log(`out_${key}.txt`)
		write(`col${key}.txt`, dict[key].join('\n') + '\n')
	}
}

if (typeof require != 'undefined' && require.main==module) {
	split_save(process.argv[2])
}
