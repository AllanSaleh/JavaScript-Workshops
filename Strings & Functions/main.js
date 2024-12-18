let singleQuote = 'This is a single quote string';
let doubleQuote = "This is a double quote string";

let firstName = "Allan"
let formattedString = `This is a formatted string and my name is ${firstName}`
console.log(formattedString)

let test = '          Learning JavaScript Strings         '

console.log(test.trim())

console.log(test.length)

console.log(test.toUpperCase())
console.log(test.toLowerCase())

// Slicing
let testStr = 'Learning JavaScript Strings';
console.log(testStr.slice(5, 20));

console.log(testStr.indexOf("Strings"));


console.log(testStr.includes("JavaScript"));
console.log(testStr.startsWith("Learn"));
console.log(testStr.endsWith('Strings'));

console.log(testStr.replace("JavaScript", "Python"))

newStr = testStr + " and Functions" + 20
console.log(newStr)

newStr2 = testStr.concat(" and Functions as well", " This is another ", 50)
console.log(newStr2)

// Intro to Functions (Function Declaration, Arrow Functions, Function Expression)

function greet(name){
    return `Hello my name is ${name}`
}

console.log(greet("Allan"))

const greet2 = name => `Hello my name is ${name}`

console.log(greet2("Tony"))

const cube = function(x){
    return x*x*x
}

console.log(cube(3))