// q.1 print all even numbers from 0 to 100

// for(let num = 0; num <=100; num++){

//     if (num%2==0){
//     console.log(`num = ${num}`);
//     } 
    
// }


// q.2 create a game where you start with any random game number.
//  ask the user to keep gussing the game number untill the user enters correct value.

let gamenum=25

let userNum=prompt("guess the game number")

while(userNum != gamenum){
    let userNum=prompt("you entered wrong numer guess again")

}
console.log("congratulations you entered the right number");
