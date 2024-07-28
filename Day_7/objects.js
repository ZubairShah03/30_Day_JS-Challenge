// Day 7 of 30 Day Javascript Challenge
// +++++++++++Activity 1 Task 1
// Create an object representing a book with properties like 'title', 'author', and 'year', and log the object to the console
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  year: 2024,
};
// console.log(book);

// +++++++++++Activity 1 Task 2
// access and log the title and author properties of the book object
const access = ({ title, author } = book);
// console.log(title, author);
// console.log(book["title"]);
// console.log(book.author);

// +++++++++++Activity 2 Task 3
// Add a method to the book object that returns a string with the book's title and author and log the result of calling this method
book.calling = function () {
  return `${this.title} by ${this.author}`;
};
// console.log(book.calling());

// +++++++++++Activity 2 Task 4
// add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.
book.updateYear = function(year){
    this.year = year;
}
book.updateYear(2025);
// console.log(book);

// +++++++++++Activity 3 Task 5
// create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console
const library = {
    name: "Library of Books",
    books: [
        {
            bookNumber: 1,
            bookName: "Think and grow rich"
        },
        {
            bookNumber: 2,
            bookName: "Rich Dad Poor Dad"
        },
        {
            bookNumber: 3,
            bookName: "The Psyschology of Money"
        },
    ]
}
// console.log(library);

// +++++++++++Activity 3 Task 6
// access and log the name of the library and the titles of all the books in the library
// console.log(`library name: ${library.name}`);
library.books.forEach((book) => {
    // console.log(book.bookName);
})

// +++++++++++Activity 4 Task 7
// add a method to the book object that uses this keyword to return a string with the book's title and year, and log the result of calling this method
book.taskSeven = function(){
    return `title: ${this.title}, year: ${this.year}`
}
// console.log(book.taskSeven());

// +++++++++++Activity 5 Task 8
// use a for...in loop to iterate over the properties of the book object and log each property and its value
for(let item in book){
    // console.log(`${item}=> ${book[item]}`);
}

// +++++++++++Activity 5 Task 9
// use Object.keys and Object.values methods to log all the keys and values of the book object
// console.log(Object.keys(book), Object.values(book));