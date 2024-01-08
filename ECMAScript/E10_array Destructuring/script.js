// array Destructuring is a popular syntax to use to assign variable name
// p.s. we can leave the empty spaces incase of no_name.
let [f1,,,f3] =[
"kathnamdu",
"Boston",
"portland",
"seattle"
];

console.log(f3);


//  Searching arrays with the .include function
// .include()
let city =[
"kathnamdu",
"Boston",
"portland",
"seattle"
];


console.log(city.includes("Boston"));
console.log(city.includes("Santa Barbara"));
