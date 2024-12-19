// 1. Introduction to JavaScript Objects: Collections of key-value pairs
const user = {
  firstName: 'Allan',
  age: 99,
  occupation: 'Instructor',
};

// 2. Accessing Objects with Bracket & Dot Notation
console.log(user['firstName']);
console.log(user.firstName);

// 3. Modifying Objects
// Adding Property: Creates a new key-value pair if the selected property doesn't exist
user.location = 'Canada';
console.log(user);

// Updating Property: Modify existing property
user.age = 29;
console.log(user);

// Delete Property: Remove property with "delete" keyword
delete user.occupation;
console.log(user);

// 4. Methods in Objects
const car = {
  make: 'Jeep',
  model: 'Gladiator',
  year: 2020,
  start: () => {
    console.log('Jeep started! Warming up now!');
  },
};

// calling method
car["start"] = () => console.log("Jeep not starting")

car.start();
console.log(car)

// Functions are first class 
const introduce = (name, func) => {
    console.log("hi, My name is" + name)
    func()
}

const myFunc = () => console.log('Goodbye');

introduce("Adam", myFunc)

// 5. Iterating Over Objects

// Use for...in loop to iterate over keys.
// NOTE: When trying to get value from key, must use bracket notation.
for(let key in car){
    console.log(car[key])
}

console.log('**********************')
// Use Object Methods to Iterate (Object.keys(), Object.values(), Object.entries())
const keysArr = Object.keys(car)

for(let i=0; i< keysArr.length; i++){
    console.log(`${i} - ${keysArr[i]}`)
}

keysArr.forEach((key) => {
  console.log(car[key]);
});

const valuesArr = Object.values(car)
console.log(valuesArr)

for (value of valuesArr){
    console.log(value)
}

valuesArr.forEach((value) => {
  console.log(value);
});

const carEntries = Object.entries(car)

console.log(carEntries)

for (let i = 0; i<carEntries.length; i++){
    console.log(`${carEntries[i][0]} - ${carEntries[i][1]}`);
}

Object.entries(car).forEach(entry => {
    console.log(`${entry[0]} - ${entry[1]}`)
})

// 6. Nested Objects

// parsing into nested object
const person = {
    firstName: 'Tony',
    address: {
        city: 'LA',
        zip: 90000
    },
    favFood: ["Pizza", "Ramen", "Tacos", "everything"]
}

// adding state to nested person object
console.log(person.address.city)
console.log(person["address"]["city"])
console.log(person.favFood[1])
console.log(person.favFood.slice(1,3))

// 7. Object Destructuring: Extract properties from objects
// Basic Destructuring
console.log(user)
const {firstName, age} = user

console.log(firstName, age)

console.log(user)

// Nested Destructuring
const {address: {city, zip}} = person

console.log(city, zip)

console.log(Math.PI)