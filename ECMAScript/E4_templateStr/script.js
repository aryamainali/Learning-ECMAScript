function print(firstName){
    // here we are using backtic this is how we use the template literals
    console.log(`Hello + ${firstName}`);
}
print("Arya Mainali")

function createEmail(firstName,price){
    let shipping =5.99;
    console.log(`hi ${firstName}! thank you!!!
    The Total Price : ${price}
    Shipping :${shipping}
    Grand Total : ${price+shipping}`);

}

createEmail("Ratna",113);