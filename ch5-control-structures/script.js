// CONTROL STRUCTURES 

// 1. if-else
// 2. switch
// 3. loops
// 		- for
// 		- while
// 		- do-while
// 4. break
// 5. continue
// 6. Labels


// 1. if-else 

let age = -40

if(age>0 && age<120){
if(age<13){
    console.log("Child")
}else if(age<20){
    console.log("Teenager")
}else if(age<30){
    console.log("Yound Adults")
} else if(age<50){
    console.log("Middle Aged")
}else {
    console.log("Old")
}
} else {
    console.log("Invalid age")
}


// 2. Swith 

let day = "Wednesday"

switch(day){
    case "Sunday":
        console.log("Day 1")
        break

    case "Monday":
        console.log("Day 2")
        break

    case "Tuesday":
        console.log("Day 3")
        break

    case "Wednesday":
        console.log("Day 4")
        break

    case "Thursday":
        console.log("Day 5")
        break

    case "Friday":
        console.log("Day 6")
        break

    case "Saturday":
        console.log("Day 7")
        break
    default:
        console.log("Invalid choice")
}


// 3. for

for(let i=0;i<10;i++){
    console.log("JS")
}


// 4. while

amount = 100
while(amount>0){
    console.log("You bill is due", amount)
    amount -=10
}

// 5. do-while
let n=2
let i=1
do{
    console.log(n*i)
    i++
}while(i<=10)


//5. break

let j = 0
while(j<10){
    if(j==5){
        break
    }
    console.log(j)
    j++
}                              //Output: 0 1 2 3 4





//5. continue

for(let i=0; i<10; i++){
    if(i==5){
        continue
    }
    console.log(i)
}                                //Output: 0 1 2 3 4 6 7 8 9, notice that 5 is missing.

// break terminate the loop
// continue skip the iteration



// 6. Label
console.log("\nLabel: ")

outerLoop:
for (let i = 0; i<5; i++){

    for (let j=0; j<5; j++){
        if(i==2 && j==2)
            break outerLoop
        console.log( i, j)
    }
}

for(let i = 0; i<5; i++){
    console.log("Another loop")
}                     



// Label:
// 1. A label identifies a particular statement.
// 2. A label can be used with loops and other statements.
// 3. break can exit a labeled statement.
// 4. continue can only target a labeled loop.

