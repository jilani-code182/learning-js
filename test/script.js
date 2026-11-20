// Testing the last value of i in for loop 

for(var i=0; i<5; i++){
    console.log(i)          //0 1 2 3 4
}

console.log(i)              //5


// Note: 
// Inside loop, we could only have value of i for 1 to 4
// But outside the loop the value of i is reached to 5



for(let j=0; j<5; j++){
    console.log(j)          //0 1 2 3 4 
}

console.log(j)              //ReferenceError: j is not defined
