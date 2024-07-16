// Day 4 of 30 Day Javascript Challenge --- Loops
// Activity 1 Task 1
// Write a program to print numbers from 1 to 10 using a for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Activity 1 Task 2
// Write a program to print the multiplication table of 5 using a for loop
for(let i = 1; i<= 10; i++){
    let table = 5;
    console.log(`${table} * ${i} = ${table*i}`);
}

// Activity 2 Task 3
// Write a program to calculate the sum of numbes from 1 to 10 using a while loop.
let i = 1;
let sum = 0;
while(i <=10){
    sum = sum+i;
    i++;
}
console.log(sum);

// Activity 2 Task 4
// Write a program to print numbers from 10 to 1 using while loop
let num = 10;
while(num > 0){
    console.log(num);
    num--;
}

// Activity 3 Task 5
// Write a program to print numbers from 1 to 5 using a do...while loop.
let myNum = 1;
do{
    console.log(myNum);
    myNum++;
}while(myNum <= 5);

// Activity 3 Task 6
// Write a program to calculate the factorial of a number using a do...while loop
let n = 6;
let result = 1;
let ind = 1;
do{
    result *= ind;
    ind++;
}while(ind <= n)
console.log(`Factorial of ${n} is ${result}`);

// Activity 4 Task 7
// write a program to print a pattern using nested for loops
// *
// **
// ***
// ****
// *****
for(let i = 1; i <= 5; i++){
    let pattern = "";
    for(let j = 1; j <= i; j++){
        pattern += "*"
    }
    console.log(pattern);
}

// Activity 5 Task 8
// Write a program to print numbers from 1 to 10, but skip the number 5 using the countinue statement
for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Activity 5 Task 9
// Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement
for(let i = 1; i <= 10; i++){
    if(i === 7){
        break;
    }
    console.log(i);
}