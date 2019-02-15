let s = "パタトクカシーー"
let l = []
for (var i in s){
	if (i % 2 == 0)
		l.push(s[i])
}
let ans = l.join("")
console.log(ans)
