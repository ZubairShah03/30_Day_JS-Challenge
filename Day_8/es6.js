// Day 8 of 30 Day JS Challenge
// +++++++++++++++++++Activity 1 Task 1
// use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const myName = "Zubair";
const myAge = 21;
const sayMyName = `My name is ${myName} and I am ${myAge} years old`;
// console.log(sayMyName);

// +++++++++++++++++++Activity 1 Task 2
// create a multiline string using template literals and log it to the console.
const multiline = `Lorem ipsum dolor sit amet consectetur, 
adipisicing elit. Obcaecati ducimus dolorem, expedita ipsum cupiditate in sint, 
veritatis architecto nihil quisquam eveniet. Alias ex, qui laudantium nesciunt 
vero ratione voluptatem tempora? Quibusdam ipsam blanditiis non facilis 
qui at delectus, vitae dicta temporibus aperiam voluptatibus in cumque excepturi
, ullam expedita porro maxime est, commodi sit nostrum. Asperiores?`;
// console.log(multiline);

// +++++++++++++++++++Activity 2 Task 3
// use array destructuring to extract the first and second elements from an array of numbers and log them to the console
const arr = [1, 2, 3, 4, 5];
const [first, last] = arr;
// console.log(first, last);

// +++++++++++++++++++Activity 2 Task 4
// use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2016
}

const {title, author} = book;
// console.log(title, author);

// +++++++++++++++++++Activity 3 Task 5
// use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console
const arr2 = [1, "w", 3];
const arr3 = [...arr2, 4, 5];
// console.log(arr3);

// +++++++++++++++++++Activity 3 Task 6
// use the rest operator in a function to accept an arbitrary numbers of arguments, sum them, and return the result
const myFunc = (a, b, c,...d) => {
    return a + b + c + d.reduce((acc, val) => (acc + val), 0);
}
// console.log(myFunc(1, 2, 3, 4, 5, 6, 7));

// +++++++++++++++++++Activity 4 Task 7
// write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and withoout the second parameter
const func = (a, b=1)=>{
    return a * b;
}
// console.log(func(5, 6));
// console.log(func(5));

// +++++++++++++++++++Activity 5 Task 8
// use enhanced object literals to create an object with methods and properties, and log the object to the console
const obj = {
    sayHello(){
        console.log(`Hello ${this.name}`);
    },
    sayBye(){
        console.log(`Bye Bye 👋🏻`);
    },
    greet: function(){
        console.log("Welcome");
    },
    name: "Zubair"
}
// console.log(obj);

// +++++++++++++++++++Activity 5 Task 9
// create an object with computed property names based on variables and log object to the console
const key1 = "firstName";
const key2 = "lastName";

const newObj = {
    [key1]: "Zubair",
    [key2]: "Shah"
}
// console.log(newObj);