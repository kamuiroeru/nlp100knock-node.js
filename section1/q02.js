let str1 = "パトカー"
let str2 = "タクシー"

let l = []
for (let i in str1){
	l.push(str1[i] + str2[i])
}
let ans = l.join("")
console.log(ans);
