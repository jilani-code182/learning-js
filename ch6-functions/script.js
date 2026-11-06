// FUNCTIONS
console.log("Function: ")

// 1. Return in Function
// 2. Default Parameter in Function
// 3. Rest Parameter in Function
// 4. Spread Parameter in Function 
// 5. First Class Function
// 6. Callback Function
// 7. Higher Order Function
// 8. Recursion in Funciton 




//1. Return: ----------------------------------------

//Without return: 
//It returns undefined 
function myFunc(){
    console.log("This is a new function. ")
    
}

let result = myFunc()          
console.log(result)                     //undefined


//With return but no value: 
// It also return undefined 
function myFunc1(){
    console.log("This is a new function. ")
    return
}

let result1 = myFunc1()          
console.log(result1)                     //undefined


//With return and value:
// It returns the value at the palce of calling
function myFunc2(){
    console.log("This is a new function. ")
    return "Hello"
}

let result2 = myFunc2()          
console.log(result2)                //Hello



// 2. Default Parameter: --------------------------------------------
// It is used to pass the defualt paramter in case the argument is not passed during function call 


// Without default parameter: 
function name(name){
    console.log("My name is ", name)
}

name()    // My name is undefined

// With default parameter

function job(job="Self Employed"){
    console.log("I am ", job)
}

job("Software Engineer")        //I am Software Engineer 
job()                           //I am Self Employed



//3. Rest Parameter: ------------------------------------------
// It contains all the extra arguments passed by the user during the function call 

function sum(num1, num2, num3){
    console.log(num1, num2, num3)
}
sum(1,2,3, 4, 5, 6)                 //1 2 3

//With rest parameter

function sum2(num1, num2, num3, ...rest){
    console.log(num1, num2, num3, rest)         //1 2 3 [4, 5, 6], here 'rest' is an Array
    console.log(num1, num2, num3, ...rest)      //1 2 3 4 5 6, '...rest' is used to extract element as raw value from the Array
    console.log(rest)                           //[4, 5, 6]
    console.log(...rest)                        //4 5 6
}
sum2(1,2,3, 4, 5, 6)



//4. Spread parameter: -----------------------------------
// It is used to unpack the value inside rest parameter

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]

console.log(arr1)           //[1, 2, 3, 4, 5]
console.log(arr2)           // [6, 7, 8, 9, 10]
console.log(arr2+arr2)      //6,7,8,9,106,7,8,9,10
console.log(...arr1, ...arr2)   //1 2 3 4 5 6 7 8 9 10
console.log([...arr1, ...arr2]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//Arrow Function:-----------------------
// It is a function without a name
// It is passed as a value in another function
// It is stored in a varible and called using that varibale name 

a = 10, b=20
const res = (n1,n2)=>{console.log(n1+n2)}
res(2,3);


//Call arrow function without storing inside a variable 

(()=>{console.log(a+b)})();



// 5. First Class Function: ----------------------------------------------
// The function which is passed as a value in another function is  called a first class function

let func1 = ()=>{
    console.log("I am function 1")
}

function func2(val){
    val();
}

func2(func1)

