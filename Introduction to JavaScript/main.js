// 1. Introduction to JavaScript Basics

// What is JavaScript? Client Side Programming language primarily used to make web pages interactive. Alongside HTML and CSS, it forms the core technologies for building websites.
// HTML: Structures Content, CSS: Styles, JavaScript: Adding dynamic behavior & interactivity
// Can use Node to write server-side code with JavaScript
console.log('testing');
// NOTE: Use semi-colons at the end of each statement... or not.

// Basic Data Types
let name = 'Allan'; // string
let age = 29; // number
console.log(typeof -5.6);
let isStudent = true; //boolean
let job; //undefined
console.log(job);
let address = null; // null
console.log(address);

const students = ['Victoria', 'Tony', 'Ben'];
const person = {
  name: 'Allan',
  isInstructor: true,
};

console.log(students[0]);
console.log(person['name']);
console.log(person.isInstructor);

// 2. Variables & Assignment

// Declaring Variables
var city = 'New York';

// Assignment & Reassignment
// let: allows for re-assignment
let score = 0;
score = 10;
console.log(score);

// const: cannot re-assign values
const birthYear = 1995;
// birthYear = 2020 // Error: Assignment to constant variable
console.log(birthYear);

// 3. Operators

// Arithmetic Operators (+, -, *, /, %)
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(Math.round(10 / 3));

// Comparison Operators (==, ===, !=, !==)
let x = 5;
let y = '5';

console.log(x == y);
console.log(x === y);
console.log(x != y);
console.log(x !== y);

console.log(typeof y);

// Logical Operators (&&(AND), ||(OR), !(NOT))
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);
console.log(isAdult == true && hasID == true);

console.log(isAdult || hasID);
console.log(isAdult == true || hasID == true);

console.log(!hasID);

// 4. Conditionals

// if statement
let temp = 90;

if (temp > 80) {
  console.log('its hot');
}

// else if, else
let grade = 75;

if (grade >= 90) {
  console.log('Grade: A');
} else if (grade >= 80) {
  console.log('Grade: B');
} else if (grade >= 70) {
  console.log('Grade: C');
} else if (grade >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// Nested Conditionals
age = 15;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log('You can drive!');
  } else {
    console.log('You need a license first!');
  }
} else {
  console.log('You are too young to drive!');
}

// Using Switch Statements for multiple conditions
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Its the beginning of the week!');
    break;
  case 'Tuesday':
    console.log('Its Tuesday, Almost the middle of the week');
    break;
  case 'Wednesday':
    console.log('Officially the middle of the week');
    break;
  case 'Thursday':
    console.log('Its almost FRIDAYYYY');
    break;
  case 'Friday':
    console.log('Its FRIDAYYYYY!!!');
    break;
  default:
    console.log('Its the weekend!');
    break;
}
