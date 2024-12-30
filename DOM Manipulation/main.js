// JavaScript DOM Manipulation

// 1. What is the DOM? Representation of an HTML document as a tree structure, allowing javascript to access and manipulate elements.

// 2. Selecting Elements with JS document methods

// Selecting by ID
const header = document.getElementById('headerOfPage');
console.log(header)

// Selecting by Class Name
const students = document.getElementsByClassName('student')
console.log(students)

// Selecting by Tag Name
const paragraphs = document.getElementsByTagName('p')
console.log(paragraphs)

// Selecting using querySelector (returns first match)
// NOTE: querySelector selects by css selector syntax.
const myButton = document.querySelector('.btn')
console.log(myButton)

const unordered_list = document.querySelector('div ul')
console.log(unordered_list)

// Selecting using querySelectorAll (returns a NodeList of all matches)
const allButtons = document.querySelectorAll('button')
console.log(allButtons)


// 3. Manipulating DOM Elements

// Updating Content (.innerHTML, .textContent)
myButton.textContent = 'THIS IS MY BUTTON'
header.innerHTML = 'THIS IS MY <b>HEADER</b><p>this is a paragragh</p>';

// Modifying Styles
myButton.style.backgroundColor = "#cf8282"
myButton.style.padding = '10px'

// Adding and Removing Classes
// Add a class
header.classList.add('adding_class', 'another')

// Remove a class
header.classList.remove("another")


// 4. Creating and Remove Elements

// Creating a New Element
const myListItem = document.createElement('li')  // <li></li>
myListItem.textContent = 'Bob' //<li>Bob</li>
myListItem.classList.add("student")
const ul = document.querySelector('div > ul')
ul.append(myListItem)


// inserting an element before another
const myDiv = document.createElement('div')
myDiv.textContent = 'Adding this before the button'

const firstButton = document.getElementsByTagName('button')[0]

document.body.insertBefore(myDiv, firstButton);

// removing an element from the dom (.remove())
header.remove()