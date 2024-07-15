// Day 3 - Control Structures

// ++++++++++Activity 1 Task 1
// write a program to check if a number is positive, negative, or zero, and log the result to the console.

let numberOne = 5;
if (numberOne > 0) {
  console.log("Number is Positive");
} else if (numberOne < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is Zero");
}

// ++++++++++Activity 1 Task 2
// Write a program to check if a person eligible to vote(age>=18) and log the result to the console.

let age = 10000;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You are not eligible to vote");
}

// ++++++++++Activity 2 Task 3
// Write a program to find the largest of three numbers using nested if-else statements.
let a = 56;
let b = 17;
let c = 6;
let largest;
if (a >= b) {
  if (a >= c) {
    largest = a;
  } else {
    largest = c;
  }
} else {
  if (b >= c) {
    largest = b;
  } else {
    largest = c;
  }
}
console.log("Largest Number is: ", largest);

// ++++++++++Activity 3 Task 4
// Write a program that uses a switch case to determine the day of the week based oon a number (1-7) and log the day name to the console.

let weekNumber = 0;
switch (weekNumber) {
  case 1:
    weekNumber = "Monday";
    break;
  case 2:
    weekNumber = "Tuesday";
    break;
  case 3:
    weekNumber = "Wednesday";
    break;
  case 4:
    weekNumber = "Thrusday";
    break;
  case 5:
    weekNumber = "Friday";
    break;
  case 6:
    weekNumber = "Saturday";
    break;
  case 7:
    weekNumber = "Sunday";
    break;
  default:
    console.log("Invalid Number");
}
console.log(`Today is ${weekNumber}`);

// ++++++++++Activity 3 Task 5
// Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let score = -10;
let grade;
switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score < 60 && score >= 0:
    grade = "F";
    break;
  default:
    grade = "Not Defined";
}

console.log(`Your Grade is ${grade}`);

// ++++++++++Activity 4 Task 6
// Write a program that uses the ternary operator to check if number is even or odd and log the result to the console.

let num = 150;
let result = (num % 2 == 0) ? "even" : "odd";
console.log(`Your number is ${result}`);


// ++++++++++Activity 5 Task 7
// Write a program to check if a year is a leap year using multiple conditions(divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Function to check if a year is a leap year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true; // Divisible by 4, 100, and 400
            } else {
                return false; // Divisible by 4 and 100, but not by 400
            }
        } else {
            return true; // Divisible by 4, but not by 100
        }
    } else {
        return false; // Not divisible by 4
    }
}

// Define the year to check
let year = 2024;

// Check if the year is a leap year and log the result
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
