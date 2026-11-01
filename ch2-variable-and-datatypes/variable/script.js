//VARIABLE

// Redeclaration and re-assignment.

var a = 10 
var a = 20         //re-declaring possible.
console.log(a)

let b = 30
//let b = 40        //No re-declaration. (SyntaxError: Identifier 'b' has already been declared.)
b = 40
console.log(b)      //re-assignmet possible.


//const e               //No declaration without assignment. (SyntaxError: Missing initializer in const declaration)
 const e = 70
 console.log(e)

//const e = 80          //No re-declaration. (SyntaxError: Identifier 'e' has already been declared)
//e = 80                //No re-assignment. (TypeError: Assignment to constant variable.)


// Accessing before declaration

console.log(c)         // result: undefined, Accessing possible. 
var c = 50

//console.log(d)        // Accessing not possible. (ReferenceError: Cannot access 'd' before initialization)
let d = 60 


//console.log(f)         //Accessing not possible. (ReferenceError: Cannot access 'f' before initialization)
const f = 90


//Scoping 

{
var g = 100
let h=110
const i = 120
console.log(h, i)    // has Block access

}

console.log(g)       //has Global access
console.log(h)       //No global access.  (ReferenceError: h is not defined)
// console.log(i)    //No global access.  (ReferenceError: h is not defined)

console.log(window)    // g variable is present in the window, bec its has Global scope 

