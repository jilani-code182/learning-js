// CLOSURE
// - Lexical Scope
// - Closure 
// - Data Privacy via Closure
// - Closure Fitfalls (JS Unexpected Behaviour with Closures)



// Lexical Scope: ------------------------------------------------------------------------
// Lexical Scope means the function will read the scope of the place where it is defined
// not where it is called 

let r = "Financial Accounting"

function read1(){
    console.log(r)
}

function read2(){
    let r = "System Design"
    read1()
}

read2()             //Financial Accounting, (Look the result is read form the first 'r' not the second one, This is called Lexical Scope)




// Closure: ---------------------------------------------------

function calculate(){
    let a = 10 

    return function sum(){
        console.log(a)
    }
}

console.log(calculate())


let result = calculate()
result()                    //10
result()                    //10
result()                    //10
result();                    //10

// Or,

//--Direct invocation 
calculate()()               //10, this is valid, the returned function can be immediately invoked bec its and expression, not declaration


// Note: 
// The variable a is not defined in the function that is returned to result
// but we can still access it
// this is called 'Closure'



// Data Privacy  via Closure: -----------------------------------------------------------------

function bank(){
    let balance = 1000

    function deposite(amount){
        balance += amount
    }

    function withdraw(amount){
        balance -=amount
    }

    function checkBalance(){
        console.log(balance)
    }

    return {deposite, withdraw, checkBalance}
}


let transaction = bank()
console.log(transaction)

transaction.deposite(1000)
transaction.withdraw(200)
transaction.checkBalance()          //1800

console.log(transaction.balance)      //undefined, cannot access balance directly, this is bec its closure, this is how closure provide data privacy



//Closure Fitfalls: --------------------------------------------------------------------

//--Pitfall 1: var vs let

for(var i = 0; i<5; i++){
    setTimeout(()=>{
        console.log(i)          //5 (printed 5 five times at once)
    }, (i+1)*1000)              //This will delay the printing of vlaues by 1 sec gap bet each value
}

console.log("For loop finished.")


for(let i = 0; i<5; i++){
    setTimeout(()=>{
        console.log(i)          //0 1 2 3 4 (all values is printed at once after 1 sec)
    },(i+1)* 1000)              //This will delay the printing of vlaues by 1 sec gap bet each value
}

console.log("For loop2 finished.")


//Output: 
// For loop finished.
// For loop2 finished.
// 5
// 0
// 5
// 1
// 5
// 2
// 5
// 3
// 5
// 4


//--Note:
// The closure is present bec for loop has finished executing before printing of value bec of time delay
// but it can still access i
// that's why it an example of closure. 


//--Pitfall 2: remembering the finished function value

function name(){
    let name = "arun"

    return function(){
        console.log(name)
    }
}

let myName = name()
myName()                        //arun, its remembering the variable of the function which has finished executing, it is also a pitfall

 
