// Day 5 --- Functions
// +++++++++++++++++++++Activity 1 Task 1
// Write a function to check if a number is even or odd and log the result to the console
function checking(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}
// checking(5);

// +++++++++++++++++++++Activity 1 Task 2
// write a function to calculate the square of a number and return the result.
function calcSquare(num) {
  let result = `Square of ${num} is: ${num ** 2}`;
  return result;
}
// console.log(calcSquare(9));

// +++++++++++++++++++++Activity 2 Task 3
// Write a function expression to find the maximum of two numbers and log the result to the console

let maxNum = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is maximum`);
  } else {
    console.log(`${num2} is maximum`);
  }
};
// maxNum(-1, 0);

// +++++++++++++++++++++Activity 2 Task 4
// Write a function expression to concatenate two strings and return the result
let concatination = function (str1, str2) {
  let result = str1.concat(str2);
  return result;
};
// console.log(concatination("Zubair", " Shah"));

// +++++++++++++++++++++Activity 3 Task 5
// Write an arrow function to calculate the sum of two numbers and rerturn the result
let sumosa = (num1, num2) => {
  let result = num1 + num2;
  return result;
};
// console.log(sumosa(15, 84));

// +++++++++++++++++++++Activity 3 Task 6
// Write an arrow function to check if a string contains a specific character and return a boolean value
let strCheck = (string) => {
  let result = string.includes("i");
  return result;
};
// console.log(strCheck("Zubair"));

// +++++++++++++++++++++Activity 4 Task 7
// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter
let findProduct = (val1, val2 = 10) => {
  let product = val1 * val2;
  return product;
};
// console.log(findProduct(7));

// +++++++++++++++++++++Activity 4 Task 8
// Write a function that takes person's name and age and return a greeting message. Provide a default value for the age.
function greeting(userName, userAge = 21) {
  return `Congrats ${userName} on your ${userAge} Birthday`;
}
// console.log(greeting("Ahmed"));

// +++++++++++++++++++++Activity 5 Task 9
// Write a higher-order function that takes a function and a number, and calls the function that many times.
// function to be repeated (higher order function)
let repeatFunction = function (func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
};

// function to be passed
let sayHello = function () {
  console.log("Hello");
};

// call repeatFunction with sayHello and a number
// repeatFunction(sayHello, 8);

// +++++++++++++++++++++Activity 5 Task 10
// Write a higher-order function that takes two functions and a value, applies the first function to the value, then applies the second function to the result.
let myFunc = function (func1, func2, value) {
  return func2(func1(value));
};

let funcOne = function (x) {
  return x + 1;
};

let funcTwo = function (x){
    return x * 2;
}

console.log(myFunc(funcOne, funcTwo, 5));
