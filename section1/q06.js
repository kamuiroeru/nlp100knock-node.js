Set.prototype.union = function(setB) {
	let union = new Set(this)
	for (let d of setB) {
		union.add(d)
	}
	return union
}

Set.prototype.intersection = function(setB) {
	let intersection = new Set()
	for (let d of setB) {
		if (this.has(d)){
			intersection.add(d)
		}
	}
	return intersection
}

Set.prototype.difference = function(setB) {
	let difference = new Set(this)
	for (let d of setB) {
		difference.delete(d)
	}
	return difference
}

const ngram = require('./q05.js')

let str1 = "paraparaparadise"
let str2 = "paragraph"

let X = new Set(ngram(str1))
let Y = new Set(ngram(str2))

console.log(X)
console.log(Y)
console.log(X.union(Y))
console.log(X.intersection(Y))
console.log(X.difference(Y))

