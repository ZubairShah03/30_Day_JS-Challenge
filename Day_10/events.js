// Day 10 of 30 Day Javascript Challenge --- Event Handling
// +++++++++++++Activity 1 Task 1
// ---add  a click event listener to a button that changes the text content of a paragraph
const para = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', function(){
    para.textContent = "I am changed";
})

// +++++++++++++Activity 1 Task 2
// ---add a double-click event listenere to an image that toggles its visibility
const image = document.querySelector("#image");
