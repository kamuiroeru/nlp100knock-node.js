let str = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."

let num_set = new Set([1, 5, 6, 7, 8, 9, 15, 16, 19])
let l = str.split(/[,.\s]+/)
			.filter( (d) => d )
			.map( (d, lc) => num_set.has(lc+1) ? d.slice(0, 1): d.slice(0, 2) )
let ans = {}
l.map( (d, lc) => ans[d] = lc+1 )

console.log(ans)
