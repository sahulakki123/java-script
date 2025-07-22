
// odd even


let num = parseInt(prompt("enter the number"))
if (num%2 == 0){
    alert(`number ${num} is even`)
} 
else{
    alert(`number ${num} is odd`)
}



let age = 16

age >= 16 ? "adult" : "not adult " // simper , compact if- else


//  get user to input a number ussing prompt ("enter the number") check if the number is a multiple of 5 or not

let num1 = parseInt(prompt("enter the number"))
if (num1 %3===0){
    alert(`${num1} is a multiple of 3`)
} else{
    alert(`${num1} is not a multiple of 3`)
}


//  write a code whic can give grades to student according to their scores

let score =parseInt(prompt("enter your score (0-100)"))
let grabe

if (score >= 90 && score <= 100){
    grabe = "A"
} else if (score >= 70 && score <=89){
    grabe = "B"
}else if (score >= 60 && score <=69){
    grabe = "C"
}else if (score >= 50 && score <=59){
    grabe = "D"
}else if (score >=0 && score <=49){
    grabe = "F"
}

console.log(`according to you score , your grade was  ${grabe} `);
