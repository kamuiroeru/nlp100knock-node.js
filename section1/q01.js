let s = "パタトクカシーー"
let ans = s.split("")
			.filter( (d, lc) => lc % 2 === 0 )
			.join("")
console.log(ans)
