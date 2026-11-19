// HOISTING:--------------------------


console.log(a)          //undefined, ( bec var is initialized with 'undefined' in the memory creation phase )
hello()                 //Hello, ( the function is executed bec it is assigned with its body in memory creation phase )
console.log(b)          //Uncaught ReferenceError: Cannot access 'b' before initialization, ( bec let and const are in Temporal Dead Zone (TDL) in memory creation phase )
console.log(c)          //This line is not executed bec of error occured at previous line


var a=10
let b =20
const c = 30

function hello(){
    console.log("Hello")
}


// Note: ________________________________________________________________________________________________________________________________
// The value of a, b, c and hello is hoisted meaning they are processed first before execution of code
// That's why we can access var and function before declaration bec they are registered in memory before execution of code line-by-line
// The let and cost is also hoisted but they stay in the TDL, that's why we cannot access them before initializon
// So, hoisting is done in js bec it helps js to prepare execution environment before execution of code
//_______________________________________________________________________________________________________________________________________


