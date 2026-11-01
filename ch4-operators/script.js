
// OPERATORS

// 1. Arithmetic
// 2. Assignment
// 3. Comparison
// 4. Logical
// 5. Ternary
// 6. Bitwise
// 7. Nullish Coalescing
// 8. Optional Chaining



// Ternary Operator

10>55?console.log("This is True"):console.log("This is Falsse")


// Nullish Coalescing

// ??
// This treats null and undefined as falsy value and provide the default value if there is no falsy value

console.log(null??"name")           //Output: name
console.log(undefined??"raju")      //Output: raju
console.log("rajesh"??"raju")       //Output: rajesh, output is first value if its not null or undefined

// ||
// This treates 0, 0n, Nan, "", false, null, undefined as falsy value

console.log(null||88)                       //88
console.log(undefined||[2,3,"rara"])        //[2,3,"rara"]
console.log(0||"Zero")                      //Zero
console.log(-0||"Negative zero")            //Negative zero
console.log(0n||"BigInt zero")              //BigInt zero
console.log(NaN||"Not a number")            //Not a number
console.log(""||"Empty string")             //Empty string
console.log(false||"False")                 //False

console.log([]||"Empty array")                      //Output: [], empty array is not falsy
console.log({}||"Empty object")                     //Output: {}, empty object is not falsy
console.log(function sum(){}||"Empty function")     //Output: sum(){}, empty function is not falsy





