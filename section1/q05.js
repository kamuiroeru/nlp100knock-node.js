const ngram = (str, n=2) => 
	str.split("")
		.map( (_, lc) => str.slice(lc, lc+n) )  // lcからlc+2までスライス
		.slice(0, str.length - n + 1)  // 余分な後ろ部分をスライス

module.exports = ngram

// ifmain
if (typeof require != 'undefined' && require.main==module) {
	console.log(ngram('hogefugapyo', 3))
}
