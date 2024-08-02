// ++++++++++++Activity 1 Task 1
// Select an HTML element by its ID and change its text content.
const heading = document.getElementById("heading");
// console.log(heading);
heading.innerText = "Change through DOM";

// ++++++++++++Activity 1 Task 2
//select an HTML element by its class and change its background color

const subHeading = document.querySelector(".subHeading");
// console.log(subHeading);
subHeading.style.backgroundColor = "green";

// ++++++++++++Activity 2 Task 3
// Create a new div element with some text content and append it to the body.
const div = document.createElement("div");
div.style.backgroundColor = "grey";
div.innerText = "Hello World";
// const addText = document.createTextNode("Zubair Shah");
// div.appendChild(addText);
document.body.appendChild(div);

// ++++++++++++Activity 2 Task 4
// create a new li element and add it to an existing ul list
const parent = document.querySelector("#parent");

function addDay(day) {
  const li = document.createElement("li");
  li.innerText = `${day}`;
  parent.appendChild(li);
}
addDay("Wednesday");
addDay("Thursday");

// ++++++++++++Activity 3 Task 5
// select an HTML element and remove it from the DOM
const button = document.querySelector("button");
button.remove();

// ++++++++++++Activity 3 Task 6
// remove the last child of a specific HTML element
document.querySelector("li:last-child").remove();

// ++++++++++++Activity 4 Task 7
// select an HTML element and change one of its attrubute(eg., 'src' an 'img' tag).
const image = document.querySelector("#img");
image.setAttribute("src", "#newLink");
console.log(image);

// ++++++++++++Activity 4 Task 8
// add and remove a 'CSS' class from an HTML element
const paragraph = document.querySelector("#task8");
paragraph.classList.add("task8", "task8.1", "task8.2");
paragraph.classList.remove("task8");
console.log(paragraph);

// ++++++++++++Activity 5 Task 9
// add a 'click' event listener to a button that changes the text content of a paragraph
const btn = document.querySelector("#changeText");
btn.addEventListener("click", function () {
  paragraph.innerText = "Text Changed";
});

// ++++++++++++Activity 5 Task 10
// add a 'mouseover' event listener to an element that changes its border color
const btn2 = document.querySelector("#ChangeBorderColor");
btn2.addEventListener("mouseover", () => {
  btn2.style.borderColor = "yellow";
});
