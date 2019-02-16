let str = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."

let l = str.split(/[,\.\s]+/)  // 「,」「.」「 」のいずれかの連続でsplit
		.filter( (d) => d )  // 中身がある時だけ
		.map( (v) => v.length )  // 長さを返す
console.log(l)
