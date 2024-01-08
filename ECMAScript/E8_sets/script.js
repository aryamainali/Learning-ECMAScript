let books = new Set();
books.add("pride and prejudice");
books.add("war and peace") .add("OLiver Twist");

console.log(books);
console.log(books.size);
// books.delete("OLiver Twist")

books.forEach(function(item){
console.log(item);
});
console.log("has OLiver Twist",books.has("OLiver Twist"))

