//OBJECTS
console.log("OBJECTS")

// 1. Object Fundamentals
// 2. Dot Notation
// 3. Bracket Notation
// 4. Object Methods
// 5. Object Destructuring
// 6. Shallow Copy
// 7. Deep Copy
// 8. Object.freeze()
// 9. Object.seal()
// 10. Property Descriptors
//      - Object.defineProperty()
//      - Object.getOwnPropertyDescriptor()


//What is an object?: ---------------------------------------------------------
// Object is a reference data type in which we can store multiple data in key:value pair

let user1 = {
    name:"jilani",
    address:"ktm",
    phone:99999999999
}


// Dot Noation: ----------------------------------------------------------------
console.log("Dot notation: ")


console.log(user1.name)                   //jilani
user1.name = "rahul"
console.log(user1)                       //{name: 'rahul', address: 'ktm', phone: 99999999999}
user1.college = "Sagarmatha"             //{name: 'rahul', address: 'ktm', phone: 99999999999, college: 'Sagarmatha'}, ==If key doesn't exist then a  new key is created ==
console.log(user1)



//Bracket notation: --------------------------------------------------------------
//When we provide quote in bracket notation then it looks for the key(property) of that object
//When we don't provide quote then it looks for that variable in the program and take its value

let myaddress = "address"
console.log(user1[myaddress])             //ktm

let data = "address"
console.log(user1[data])                 //ktm, here data is a declared variable not the key of an object, the value of data is the key of an object.



//Object Methods: -------------------------------------------------------------------
// If there is a function pressent inside an object then it is the method of that function
// We can execute it by simply calling it
// To define that  function, we don't need to store it in a variable and not need to use the keyword 'function'
// We only need to write method name, brackets and its block


//-- Method 1: Using Named function
let student1 = {
    name:"raju",
    age:23,
    address:"ktm",
    marks: function calculateMarks(cgpa){
        console.log("His cgpa is: ", cgpa)
    }
}
student1.marks(3.1)          //His cgpa is:  3.1


//--Method 2: Using Unnamed function
let student2 = {
    name:"raju",
    age:23,
    address:"ktm",
    marks: function(cgpa){
        console.log("His cgpa is: ", cgpa)
    }
}
student2.marks(3.2)          //His cgpa is: 3.2


//--Method 3: Using Arrow function
let student3 = {
    name:"raju",
    age:23,
    address:"ktm",
    marks: (cgpa)=>{
        console.log("His cgpa is: ", cgpa)
    }
}
student3.marks(3.3)          //His cgpa is:  3.3


//--Method 4: Using Shorthand
let student4 = {
    name:"raju",
    age:23,
    address:"ktm",
    marks(cgpa){
        console.log("His cgpa is: ", cgpa)
    }
}
student4.marks(3.4)          //His cgpa is:  3.4



// Destructuring: ----------------------------------------------------------------------
// When we need to access the multiple key form an object then we use destructuring 


//--Without destructuring, we need to do this: 
console.log(user1.name, user1.phone, user1.address)         //rahul 99999999999 ktm

//--With Destructuring, we don't need to write 'user1' multiple times
let {name, phone, address}=user1
console.log(name, phone, address)           //rahul 99999999999 ktm



// Shallow Copy: -----------------------------------------------------------------------
// In the shaloow copy, only the superficial data are copied, Nested data is not copied. 
// It still remain as a reference type.
// Updating one value will update values in other objects too if its copied in it.


console.log("\nProduct 1:")
product1 = {
    name:"phone",
    color:"orange",
    price:100000,
    category:{
        size:15,
        thickness:"12mm"
    }
}
console.log(product1)

console.log("\nProduct 2:")
product2={...product1}
product2.category.size=20
console.log(product2)           //size changed to 20
console.log(product1)           //size changed to 20

// __Changes occured in both object while changing one object. 
// __It means the nested values are still reference type, it not copied form the previous object
// __This is where we need to do deep copy



// Deep Copy: --------------------------------------------------------------------
// It copies the nested value also

let str = JSON.stringify(product1)
console.log(str)
console.log("\nProduct 3:")
product3 = JSON.parse(str)

//OR,
// product3 = JSON.parse(JSON.stringify(product1))              //In one line
// product3=structuredClone(product1)                           //This is a new method of JS for deep copy

product3.category.size=15
console.log(product3)           //size: 15
console.log(product1)           //size: 20



// Limitations of stringify():______________________________________
//                                                                  |
// JSON stringify + parse is a common way to perform a deep copy,   |
// but it doesn't support every JavaScript value.                   |
// For example, it doesn't preserve:                                |
//                                                                  |
// - Functions                                                      |
// - undefined object properties                                    |   
// - Date objects as Date objects                                   |
// - Map and Set objects                                            |   
// - Circular references                                            |
//__________________________________________________________________|




// Object.freeze: ----------------------------------------------------------
// It is used to prevent any chnages to the object
// It prevent form updating, adding and deleting a new property in objects


 
console.log("\nProduct 4:")
product4 = {
    name:"phone",
    color:"orange",
    price:100000,
    size:15,
    thickness:"12mm"
}

//__applying freeze here
Object.freeze(product4)

//__updating and chnaging objects here:
product4.name="apple"
product4.processor = "octa-core"
delete product4.thickness

console.log("After freeze: ", product4)          //{name: 'phone', color: 'orange', price: 100000, size: 15, thickness: '12mm'}, no changes occur in the object




//--Objects.seal: ----------------------------------------------------------------
// This allow updating the object
// but prevent form adding or deleting a new propery

console.log("\nProduct 4:")
product4 = {
    name:"phone",
    color:"orange",
    price:100000,
    size:15,
    thickness:"12mm"
}

//__applying freeze here
Object.seal(product4)

//__updating and chnaging objects here:
product4.name="apple"
product4.processor = "octa-core"
delete product4.thickness

console.log("After seal: ", product4)          //{name: 'apple', color: 'orange', price: 100000, size: 15, thickness: '12mm'}, the name is changed but no new property is created and deleted



//Property Descriptor: --------------------------------------------------

console.log("\nProduct 5:")
product5 = {
    name:"pc",
    color:"black",
    price:1500000,
    material:"steel"
}

console.log(Object.getOwnPropertyDescriptor(product5, "color"))         //{value: 'black', writable: true, enumerable: true, configurable: true}

Object.defineProperty(product5, "color", {
    enumerable:false,
    writable:false
})

console.log(Object.getOwnPropertyDescriptor(product5, "color"))         //{value: 'black', writable: false, enumerable: false, configurable: true}


//Note: _________________________________________________________________________________________________
// definePropery() : Is used to create or modify the characteristics of an object property
// getOwnPropertyDescriptor() : Is used to inspect or retrieve the characteristic of an object property
//_______________________________________________________________________________________________________