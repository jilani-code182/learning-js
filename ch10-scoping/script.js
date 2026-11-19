// SCOPING
// - Global Scope
// - Block Scope
// - Function Scope
// - Scope Chain
// - Shadowing



//Global, Block and Function Scope: ------------------------------------------------------

//Defining variable in different scopes: 
//--Defining glocally:
var a = 10
let b = 20
const c = 30

//--Defining in block:
{{{
    var d = 40
    let e = "raju"
    const f = true
}}}

//--Defining in function:
function scope(){
    console.log("Defining g, h, i inside function:  ")
    var g = "g"
    let h = "h"
    const i = "i"
}
scope()


//Accessing values form different scopes: 
//--Accessing globally:
console.log(a,b,c)          //10 20 30


//--Accessing in block:
{{{
    console.log(a, b, c)            //10 20 30
    console.log(d)                  //40, It is accessible in another block while it is defined in another block
    // console.log(e)               //ReferenceError: e is not defined
    // console.log(f)               //ReferenceError: f is not defined
    // console.log(g, h, i)         //ReferenceError: g, h, i is not defined
}}}


//--Accessing in function:
function value(){
    console.log(a,b, c)
    console.log(d)
    // console.log(e)               //ReferenceError: e is not defined
    // console.log(f)               //ReferenceError: f is not defined
    // console.log(g,h,i)           //ReferenceError: g, h, i is not defined
}
value()



//Scope Chain:------------------------------------------------------------
//The variable search for the value in its own scope, if it finds then it uses it
//If not found then it search it one step outer scope, if it finds it then it uses it
//If not found then it agin move one scope out to search the value
//This is called Scope Chain


let j="jilani"

function chain1(){
    let a = "a"

    function chain2(){
        let b = "b"

        function chain3(){
            let c = "c"
            console.log(a, b, c, j)
        }
        chain3()
    }
    chain2()
}
chain1()



// Shadowing: ------------------------------------------------------------------
// If a variable of same name is declared in both inner scope and outer scope
// then inner scope variable will be used
// the outer soper variable will be shodowed
// This is called Shadowing

let college = "Sagarmatha"          //This will not be used bec of Shadowing

function study(){
    let college = "British"         //This will be used
    console.log(college)
}
study()

