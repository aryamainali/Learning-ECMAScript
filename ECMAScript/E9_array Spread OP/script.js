// ...
// the spread operator turns the element of an array into arguments 
//  of a functal call or into elements of array literal.


let cats=["bis","sis"];
let dogs =["strong","danny"];
// the spread operator is written in the following way.this just avoids the 
// defualt nested array.
let animals =["smokey","miro","swimmy",...cats,...dogs];
console.log(animals);