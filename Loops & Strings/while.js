// while loop => 
    // syntex 

// while(condition) {
// do same work
// }


// let i = 1
// while (i<=5) {
//     console.log(`i = ${i}`);
//     i++
    
// }


// do-while loops 

// syntex
// do {
// do same work
// } while (condition)



// let i = 1
// do {
//     console.log(`i = ${i}`);
//     i++
    
// }while (i <= 10)






// for of loop

// syntex 

// for(let val of strvar){
    // do same work
// }

let n = "Javascript"

for (let i of n) {
    console.log(`i = ${i}`);
      
}



// for in loops

let Student = {
    namr:"Lakki sahu",
    age : 20,
    cgpa: 8,
    ispass: true

}

for(let key in Student){
    console.log(`key = ${key} value = ${Student[key]}`);
    
}