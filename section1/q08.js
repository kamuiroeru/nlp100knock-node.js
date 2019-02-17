const ord = (c) => c.charCodeAt(0)
const chr = (n) => String.fromCharCode(n)
const cipher = (str) => str.split("")
						.map( (c) => {
							let n = ord(c)
							return (n >= 97 && n <= 122) ? chr(219 - n): chr(n)
						})
						.join("")

console.log(ord('a'))
console.log(chr(97))

let s = 'I like to play soccor.'
console.log(s);
let s2 = cipher(s)
console.log(s2)
console.log(cipher(s2))
