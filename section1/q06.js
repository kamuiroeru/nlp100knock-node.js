Set.prototype.union = (setB) => {
	let union = new Set(this)
	for (let d in setB) {
		union.add(d)
	}
	return union
}

const ngram = require('./q05.js')

let str1 = "paraparaparadise"
let str2 = "paragraph"

let X = new Set(ngram(str1))
let Y = new Set(ngram(str2))

console.log(X)
console.log(Y)
console.log(X.union(Y))


