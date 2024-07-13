// Task 1
var demo = 57;
// console.log(demo);

// Task 2
let myName = "Zubair Shah";
// console.log(myName);

// Task 3
const test = 5 > 8;
// console.log(test);

// Task 4
let obj = {
  name: "Zubair",
  age: 21,
  male: true,
};

const arr = [224338, false, undefined, null, "Gujrat"];

// console.log([typeof demo, typeof myName, typeof test, typeof obj, typeof arr]);

// Task 5
let friend = "Hashir";
// console.log(`initial value: ${friend}`);
friend = "Salman";
// console.log(`new value: ${friend}`);

// Task 6
const data = true;
// data = false;         // gives error --- we cannot reassign the value of constant

// Feature Request 1
let num = 8;
let str = "Hello World";
const coder = true;
const undefi = undefined;
const demoo = () => {
    console.log("Hellooooooooooooooo!");
}

// console.log([[num, typeof num], [str, typeof str], [coder, typeof coder], [undefi, typeof undefi], [demoo, typeof demoo]]);


// Feature Request 2
let hell = true;
const haven = true;

// console.log(hell, haven);

hell = false;
// haven = false;          // given error  --- Assignment to constant variable.
// console.log(hell, haven);