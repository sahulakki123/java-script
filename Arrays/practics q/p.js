//q.1 for a given array with marks of students -> [85,96,70,88,85]
// find the average marks of the entire class


let marks = [85,96,70,88,85]

let sum = 0
for (let val of marks ){
    sum=sum+val
}

let av = sum /marks.length
console.log(`avg marks of the class = ${av}`);





//q.2  for a given array with prices of 5 items -> [123,258,456,789,50,900]
// all items have an offer of 10% off on them. change the array to store final price after applying offer

let  items = [123,258,456,789,50,900]

// let i = 0
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10
//     items[i] = items[i] - offer
//     console.log(`value after offer = ${items[i]}`);
    
//     i++    
// }


for (let i=0; i<items.length; i++){
    let offer = items[i] / 10
    items[i] -= offer

}
console.log(items);
