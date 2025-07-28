// prompt the user to enter their full name. generate a username for them based on the input.
// start username with @ followed by full name and ending with the fullname lenght

let fullname = prompt("enter your fullname without space")

let username = "@" + fullname + fullname.length

console.log(username);
