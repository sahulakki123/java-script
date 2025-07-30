//  Arrays => Collections of items

let marks = [63,89,45,12,63]
console.log(marks);
console.log(marks.length);

// js ke andare strings innmutable rahti hai ise chaing nahi kiya ja shkta hai
// js ke anader array mutable rahta hai ise chaing kar skate hai


// Looping over an Array
// print all elements of an array

let name = ["Lakki","sachin","syam","ram","neraj","lalu"]

//for loop
for(let i=0; i<6; i++){
    console.log(name[i]);
    
}

//for of

for(let n of name){
    console.log(n.toUpperCase());
    
}