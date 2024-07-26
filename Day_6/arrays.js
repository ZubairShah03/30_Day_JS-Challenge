// Day 6 of 30 day Javascript Challenge
// ++++++++++Activity 1 Task 1
// Create an array of numbers from 1 to 5 and log the array to console
const taskOne = [1, 2, 3, 4, 5];
// console.log(taskOne);

// ++++++++++Activity 1 Task 2
// Access the first and last elements of the array and log them to the console.
const taskTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(taskTwo[0], taskTwo[9]);

// ++++++++++Activity 2 Task 3
// use the 'push' method to add a new number to the end of the array and log the updated array
const taskThree = [5, "Zubair", true];
taskThree.push(50);
// console.log(taskThree);

// ++++++++++Activity 2 Task 4
// use the 'pop' method to remvove the last element from the array and log the updated array
const taskFour = [1, 2, 3, 4, 5];
taskFour.pop();
// console.log(taskFour);

// ++++++++++Activity 2 Task 5
// use the shift method to remove the first element from the array and log the updated array
const taskFive = [1, 2, 3, 4, 5];
taskFive.shift();
// console.log(taskFive);

// ++++++++++Activity 2 Task 6
// use the 'unshift' method to add  a new number to the beginning of the array and log the updated array.
const taskSix = [1, 2, 3, 4, 5];
taskSix.unshift(69);
// console.log(taskSix);

// ++++++++++Activity 3 Task 7
// use the 'map' method to create a new array where each number is doubled and log the new array
const taskSeven = [1, 2, 3, 4, 5];
const newSeven = taskSeven.map((item) => item * 2);
// console.log(newSeven);

// ++++++++++Activity 3 Task 8
// use the 'filter' method to create a new array with only even numbers and log the new array
const taskEight = [10, 20, 39, 56, 88, 33, 13, 78, 90];
const newEight = taskEight.filter((item) => {
  return item % 2 == 0;
});
// console.log(newEight);

// ++++++++++Activity 3 Task 9
// use the reduce method to calculate the sum of all numbers in the array and log the result.
const taskNine = [10, 20, 30, 40, 50];
const newNine = taskNine.reduce((acc, item) => item + acc, 0);
// console.log(newNine);

// ++++++++++Activity 4 Task 10
// use the 'for loop' to iterate over the array and log each element to the console
const taskTen = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
for(let i = 0; i < taskTen.length; i++){
    // console.log(taskTen[i]);
}

// ++++++++++Activity 4 Task 11
// use the 'forEach' method to iterate over the array and log each element to the console
const taskEleven = ["Zubair", true, "Shah", 2003, "male"];
taskEleven.forEach((item) => {
    // console.log(item);
})

// ++++++++++Activity 5 Task 12
// create a two-dimensional array(matrix) and log the entire array to the console.
const taskTwelve = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// console.log(taskTwelve);

// ++++++++++Activity 5 Task 13
// access and log a specific element from the two-dimensional array
const taskThirteen = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(taskThirteen[2][0]);// 7 => first [for row] and second [for column]