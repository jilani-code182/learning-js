//FUNCTIONAL PROGRAMMING
// - Pure Function
// - Impure Function
// - Mutability
// - Immutability
// - Currying
// - (Memoization)


// Pure Function: -------------------------------------------------------
// The function which don't use the resources out of its scope 
// and give same output on same input is called pure function

function square(a){
    return a*a
}
console.log(square(5))          //25
console.log(square(5))          //25


// Impure Function: ----------------------------------------------------------
// The function which use the resources out of its scope 
// or give different output on same input is called pure function 

function square2(a){
    console.log(a*a)
}
square2(5)                  //25



// Mutability:-------------------------------------------------------------------------------
// Mutability means making chnage in the original data
// or, when the original data is modified due to any operation on data, that is called mutability


//--Mutability in Array: 
let books = ["Math", "Physics", "Chemistry"]

function addBooks(books){
     return books.push("Account")
}
addBooks(books)
console.log(books)          // ['Math', 'Physics', 'Chemistry', 'Account'], here the origional array is mutated(modified)


//--Mutability in Object
let student = {
    name:"Raju",
    age:20
}

function stuRecord(stu){
    stu.age=22
}
stuRecord(student)
console.log(student)       //{name: 'Raju', age: 22}, here the age of the object is modified



//Imutability: --------------------------------------------------------------------------------
// Imutability means the original data is not modified due to any operation on the data

//--Imutability in Array: 
let bag = ["Pen", "Book", "Pencil"]

function myBag(arr){
    let bag = [...arr]
    bag.push("Sharpner")
    return bag
}
console.log(myBag(bag))         //['Pen', 'Book', 'Pencil', 'Sharpner']
console.log(bag)                //['Pen', 'Book', 'Pencil'], here the origional array is not modified 


//--Immutability in Objects 
let car = {
    name:"Maruti",
    price:100000
}

function myCar(obj){
    let car = {...obj}
    car.price = 200000
    return car
}
console.log(myCar(car))         //{name: 'Maruti', price: 200000}
console.log(car)                //{name: 'Maruti', price: 100000}, here the origional object is not modified, this is an example of immutability.



// Currying: -----------------------------------------------------------------
// In currying, we use nested functions where each function takes one argument at a time, 
// and returns the next function until all arguments are received.


function pizza(pizza){
    console.log(pizza)
    return function burger(burger){
        console.log(burger)
            return function coke(coke){
                console.log(coke)
        }
    }
}

let myPizza = pizza("Large")        //Large
let myBurger = myPizza("Cheeze")    //Cheeze
let myCoke = myBurger("1L")         //1L

// Or, 

pizza("Small")("Veg")("250ml");         //Small Veg 250ml


function pizza2(pizza){
    return function burger2(burger){
            return function coke2(coke){
                console.log("The pizza is: ", pizza, "The  burger is: ", burger, "The coke is: ", coke);
        };
    };
};
pizza2("Medium")("Non-veg")("500ml")            //The pizza is:  Medium The  burger is:  Non-veg The coke is:  500ml



