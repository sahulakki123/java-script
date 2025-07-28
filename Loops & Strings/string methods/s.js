// string methods in js => these are built-in functions to manitione a string
// str.touppercase()
// str.toLowerCase()
// str.trim()  = removes whitespacs
// str.slice()returns part of string
// str.concat() join str with str
// str.replace()
// str.CharAt()




// str.touppercase()
let str = "Lakkisahu"
let newstr=str.toUpperCase()
console.log(str);
console.log(newstr);


// str.toLowerCase()
let str1 = "LAKKISAHU"
let newstr1=str.toLocaleLowerCase()
console.log(str1);
console.log(newstr1);



// str.trim()  = removes whitespacs fsst end last spese in removme karta hai
let str2 = "     Lakki sahu  ji javascript           "
console.log(str2.trim());




// str.slice()returns part of string
let s = "helllo"
console.log(s.slice(0,3));



// str.concat() join str with str

let s1 = "Lakki"
let s2 = "sahu"

// let r = s1 + s2 
let r=  s1.concat(s2)
console.log(r);



// str.replace()
let st = "hello"

console.log(st.replace("h","y"));  



// str.replaceAll()
let st1 = "hello"

console.log(st1.replace("h","y"));  



// str.CharAt()

let str3 = "I love javascript"

console.log(str3.charAt(2));

