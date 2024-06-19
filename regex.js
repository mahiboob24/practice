// regex is the prosses of search and pattern matching 
// syntax /pattern/modifiers(gi)    g=globally i=case-incensitive(it will match boat upper n lower charecters)

// to match the upper lower and numbers
// [A-B]
// [a-b]
// [0=9]
// [A-Za-z0-9]          to match all
// A-Za-z                to match the upper lower

// \d--numbers
// \w--charecters
// \W 
// \s
// \S
// \.

// let st=`
// info@fitsmallbusiness.com
// kaitlyn.m.johnson@email.com
// mysite@you.me.net
// mysite123@gmail.b
// `

// out=st.match(/\w+\@\w+\.\w+/gi)
// console.log(out)


// let n=`123-456-7890
// (123) 456-7890
// 123 456 7890
// 123.456.7890
// +91 (123) 456-7890`



// console.log(n.match(/\d+\-\d+\-\d+/gi))

// console.log(n.match(/\(\d+\)\s\d+\-\d+/gi))

// console.log(n.match(/\+\d+\s\(\d+\)\s\d+\-\d+/gi))

// console.log(n.match(/\d+\.\d+\.\d+/gi))