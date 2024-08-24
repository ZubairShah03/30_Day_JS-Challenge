// Day 10 of 30 Day Javascript Challenge --- Event Handling
// +++++++++++++Activity 1 Task 1
// ---add  a click event listener to a button that changes the text content of a paragraph
const para = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  para.textContent = "I am changed";
});

// +++++++++++++Activity 1 Task 2
// ---add a double-click event listenere to an image that toggles its visibility
const image = document.querySelector("#image");

image.addEventListener("dblclick", () => {
  if (image.style.visibility === "hidden") {
    image.style.visibility = "visible";
  } else {
    image.style.visibility = "hidden";
  }
});

// +++++++++++++Activity 2 Task 3
// ---add a mouseover event listener to an element that changes its background color

const task3 = document.querySelector(".task3");

task3.addEventListener("mouseover", (e) => {
  task3.style.backgroundColor = "cornflowerblue";
});

// +++++++++++++Activity 2 Task 4
// ---add a mouseout event listener to an element that resets its background color
task3.addEventListener("mouseout", (e) => {
  task3.style.backgroundColor = "";
});

// +++++++++++++Activity 3 Task 5
// ---add a keydown event listener to an input field that logs the key pressed to the console
const task5 = document.querySelector("#task5");

task5.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// +++++++++++++Activity 3 Task 6
// ---add a keyup event listener to an input field that displays the current value in a paragraph

const task6 = document.querySelector("#task6");
let para6 = document.querySelector("#para6");

task6.addEventListener("keyup", (e) => {
  para6.innerHTML = task6.value;
});

// +++++++++++++Activity 4 Task 7
// ---add a submit event listener to a form that prevents the default submission and logs the form data to the console

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Create a FormData object to gather the form data
  const formData = new FormData(form);

  // Log the form data to the console
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
});

// +++++++++++++Activity 4 Task 8
// ---add a change event listener to a select dropdown that displays the selected value in a paragraph

const dropdown = document.querySelector("#dropdown");
let dropdownPara = document.querySelector(".dropdownPara");

dropdown.addEventListener("change", (e) => {
  dropdownPara.innerHTML = `You Selected Option ${e.target.value}`;
});

// +++++++++++++Activity 5 Task 9
// ---add a click event listener to a list that logs the text content of the clicked list item using event delegation.

const list = document.querySelector("#list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// +++++++++++++Activity 5 Task 10
// ---add an event listener to a parent element that listens for events from dynamically added child elements

const parent = document.querySelector(".parent");
const addChild = document.querySelector(".addChild");
let counter = 1;

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("child")) {
    console.log(`Child Clicked:- ${e.target.textContent}`);
  }
});

addChild.addEventListener("click", (e) => {
  const newChild = document.createElement("li");
  newChild.className = "child";
  newChild.innerHTML = `I'm a new Child ${counter}`;
  counter++;
  parent.appendChild(newChild);
});
