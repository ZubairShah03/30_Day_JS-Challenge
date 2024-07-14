// Day 2 Operators
// Activity 1 --------------------Arithmetic Operatoions
// ++++++++++++++++++++++Task 1
let numOne = 87;
const numTwo = 13;
let result = numOne + numTwo;
// console.log(result);                   //100

// +++++++++++++++++++++Task 2
let [subOne, subTwo] = [79, 55];
let subtract = subOne - subTwo;
// console.log(subtract);                //24

// +++++++++++++++++++++Task 3
let multiplication = numOne * numTwo;
// console.log(multiplication);         //1131

// +++++++++++++++++++++Task 4
const division = numOne / numTwo;
// console.log(division);              //6.6923076923076925

// +++++++++++++++++++++Task 5
let remainder = numOne % numTwo;
// console.log(remainder);             //9


// Activity 2 --------------------Assignment Operators
// +++++++++++++++++++++Task 6
let number = 45;
let anotherNumber = number += 5;
// console.log(anotherNumber);      // 50


// +++++++++++++++++++++Task 7
secondNumber = number -= 10;
// console.log(secondNumber);      // 40


// Activity 3 --------------------Comparison Operators
// +++++++++++++++++++++Task 8
// console.log(4 > 8);          //false
// console.log(4 < 8);          //true

// +++++++++++++++++++++Task 9
// console.log(89 <= 90);      //true
// console.log(55 >= 55);      //true

// +++++++++++++++++++++Task 10
// console.log('45' == 45);    //true
// console.log('45' === 45);   //false


// Activity 4 --------------------Logical Operators
// +++++++++++++++++++++Task 11
let testOne = 5>3 && 4<3;  //false --- both conditions have to correct to be true
// console.log(testOne);

// +++++++++++++++++++++Task 12
// let testTwo = true || false;  //true --- one has be to true to print true
// console.log(testTwo);

// +++++++++++++++++++++Task 13
let testThree = !false;  //true --- prints the opposite
let testFour = 4 != 4;  //false
// console.log(testThree, testFour);


// Activity 5 --------------------Ternary Operators
// +++++++++++++++++++++Task 14
let age = 17;
let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);