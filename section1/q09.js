// Fisher–Yatesアルゴリズムを用いたshuffle
const shuffle = (list) => {
	let l = [].concat(list)  // deepcopy
	let r, tmp
	for (let i = l.length - 1; i > 0; i--) {
		r = Math.floor(Math.random() * (i + 1))
		tmp = l[i]
		l[i] = l[r]
		l[r] = tmp
	}
	return l
}
module.exports.shuffle = shuffle

// ifmain
if (typeof require != 'undefined' && require.main==module) {
	let str = "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."
	let str2 = str.split(' ').map( (word) => {
		let len = word.length
		if (len > 4) {
			let [head, tail] = [word[0], word[len - 1]]
			let shuffled = shuffle(word.split('').slice(1, len-1))
			return head + shuffled.join("") + tail
		} else {
			return word
		}
	}).join(' ')
	console.log(str2)
}
