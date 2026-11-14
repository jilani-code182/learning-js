// ARRAYS
console.log("ARRAYS")

// 1. Array Fundamentals
// 2. Array Methods



// 1. Array Fundamentals: --------------------------------------------------------------
// Accessibility:

let arr = [1, 5, "t", "jilani", [], {}, true]

console.log(arr[2])
console.log(arr.length)
console.log(arr[arr.length-1])

// Updating: 

arr[2] = false
console.log(arr)


// Assignment:

arr2 = arr
arr2[1]="apple"

console.log(arr2)       //  [1, 'apple', false, 'jilani', Array(0), {…}, true]
console.log(arr)        //  [1, 'apple', false, 'jilani', Array(0), {…}, true]

// Note: Array is a reference datatype, it doesn't copy the value, it modifies the origional value.


// Copying the value: 

arr3 = [...arr]         // Using spread operator to unpack the value of array and copy it to the new varible 
console.log(arr3)
arr3[3]= 55
console.log(arr3)       // [1, 'apple', false, 55, Array(0), {…}, true] 



// Array methods: -------------------------------------------------------------

// Which change origional array: ==============================================
// 1. push
// 2. pop
// 3. shift
// 4. unshift
// 5. splice 
// 6. reverse 
// 7. short

//push()
arr4 = [1, 5, "rat", true, 5.5, [1,2,3,4,5], {name: "raju", roll:32}, 44, "abc"]
console.log(arr4)

arr4.push(77, false, "flower")
console.log(arr4)

//pop()
arr4.pop()
arr4.pop()
console.log(arr4)

//unshift()
arr4.unshift(6, 7, "grapes")
console.log(arr4)

//shift()
arr4.shift()
arr4.shift()
console.log(arr4)

//splice()
arr5 = [1,2,3,4,5,6,7,8]        // [1, 2, 7, 8]
arr5.splice(2,4)
console.log(arr5)

//reverse()
arr5.reverse()
console.log(arr5)       //[8, 7, 2, 1]


//sort()

arr6 = [3, 1, 7, 4, 9, 2,"ant", "zebra", "yak", false]      //[1, 2, 3, 4, 7, 9, 'ant', false, 'yak', 'zebra']
arr6.sort() 
console.log(arr6)

//sort() method doesn't work well for numbers
// It works on strings 
// This method compares the ASCII values of elements and then sort it according to it
// That's why the sorting on numbers gives inaccurate result 
// We need to use a callback function to sort numbers correctly

arr7 = [1, 2, 3, 10, 20, 30, 11, 12, 22, 24, 33, 37]
arr7.sort()
console.log(arr7)       //[1, 10, 11, 12, 2, 20, 22, 24, 3, 30, 33, 37], 'sort()' method doesn't work correctly on numbers


// Using callback function to sort numbers
arr7.sort((a,b)=>{
    return a-b;
})

console.log(arr7)       // [1, 2, 3, 10, 11, 12, 20, 22, 24, 30, 33, 37]



// Which new array: ======================================================
console.log("Which return new array: ")
// 1. slice
// 2. concat
// 3. map
// 4. filter


// slice()
arr8 = [1, 2, 3, 4, 5, 6, 7, 8]
let result = arr8.slice(3, 6)
console.log(arr8)                 //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(result)               // [4, 5, 6]


// concat()
arr9 = ["apple", "ball", "cat"]
arr10 = ["dog", "eagle", "frog"]
arr11 = arr9.concat(arr10)
console.log(arr9)               // ['apple', 'ball', 'cat']
console.log(arr10)              //  ['dog', 'eagle', 'frog']
console.log(arr11)              //  ['apple', 'ball', 'cat', 'dog', 'eagle', 'frog']


// map()
arr12 = [1, 2, 3, 4, 5, 6, 7]
arr13 = arr12.map((num)=>{
    return num*2
})
console.log(arr12)          //[1, 2, 3, 4, 5, 6, 7]
console.log(arr13)          //[2, 4, 6, 8, 10, 12, 14], it performs operations on every elemet just like for each


// filter()
arr14 = [10, 20, 30, 40, 50, 60, 70, 80]
arr15 = arr14.filter((num)=>{
    return num>30
})

//Also in short form: 
arr15 = arr14.filter(num=>num>30)

console.log(arr14)          // [10, 20, 30, 40, 50, 60, 70, 80]
console.log(arr15)          //[40, 50, 60, 70, 80], it return the few element that satisfies the filter condition



// Which returns the value: ===================================================
console.log("Which returns a value: ")
// 1. find
// 2. includes
// 3. indexOf
// 4. reduce
// 5. some
// 6. every


//find(): Returns the first element that satisfy the condiion
arr16 = [12, 33, 22, 55, 65, 88]
arr17 = arr16.find(num=>num>22)
console.log(arr16)
console.log(arr17)          //33

//includes(): checks if the given element is present inside the array or not. it returns boolean result. 
arr18 = arr16.includes(22)
console.log(arr18)              //true

// indexOf(): returns the index of a given element
console.log(arr16.indexOf(55))      //3


// some(): returns true if any element satisfy the given condition
arr19=arr16.some(num=>num%2==0)
console.log(arr19)                  //true

// every(): checks if every element satisfy the given condition
arr20=arr16.every(num=>num%2==0)
console.log(arr20)                  //false

// reduce()
// It takes two argument, a callback and a initial value.
// callback also takes two argument, first paramenter represent the accumulated value and second represents an element
// We can perform any operation with thses two parameter according to our need 

//Finding sum of all element 
arr21 = [2, 44, 4, 22, 77, 86]
arr22=arr21.reduce((total, num)=>{
    return total+num;
}, 0)
console.log(arr22)              //235


//Finding multiplicaiton of all elements
arr23=arr21.reduce((total, num)=>{
    return total*num;
}, 1)
console.log(arr23)            //51280768

