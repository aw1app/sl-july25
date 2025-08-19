//VariablesAndDataTypes.js

let variableExample = "I am a variable.";
const constantExample = "I am a constant.";

console.log(variableExample);
console.log(constantExample);

// constantExample ="asasa";

// Update the value of a variable
variableExample = "I have a new value.";
console.log("Updated Variable:", variableExample);


// Primitive Data Types
let stringExample = "Hello, JavaScript!";
let numberExample = 42;
let booleanExample = true;

console.log("String:", stringExample);
console.log("Number:", numberExample);
console.log("Boolean:", booleanExample);

let str2 = new String ("hello");

console.log( typeof str2);
console.log( typeof stringExample);

// Data Type Conversion
let convertedString = String(numberExample);
let convertedNumber = Number("123");
let convertedBooleanString = String(booleanExample);
let convertedBooleanNumber = Number(booleanExample);

console.log( typeof numberExample);
console.log( typeof convertedString);

// Implicit Conversion
let implicitConversion = "5" + 5; // Results in string "55"
console.log("Implicit Conversion:", implicitConversion);


// Explicit Conversion
let explicitConversion = Number("5") + 5; // Results in number 10
console.log("Explicit Conversion:", explicitConversion);



//New Feature: Object.groupBy() (ES2024)
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
];

const groupedByAge = Object.groupBy(users, (user) => user.age);
console.log("Grouped Users by Age:", groupedByAge);

//New Feature: Promise.withResolvers() (ES2024)
const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => resolve("Resolved after 2 seconds"), 2000);

promise.then((message) => console.log(message));

//Validation
console.log("Validation Complete!");