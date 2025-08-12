//--- Lesson 04 Demo 01: StringMethods.js ---
// Single quotes (' '), double quotes (" "), or template literals (``)
let singleQuotesString = 'Single Quotes String';
let doubleQuotesString = "Double Quotes String";
let templateLiteralString = `Template Literal String`;

console.log("Single Quotes String:", singleQuotesString);
console.log("Double Quotes String:", doubleQuotesString);
console.log("Template Literal String:", templateLiteralString);

// String Objects, Indexing
let myString = "Hello, World!"; // Declared this variable as it's used later but wasn't initialized at the top
let myStringObject = new String("Hello, World!");

console.log("String Object:", myStringObject);

// Accessing individual characters using indexing
// Note: The original PDF used myStringLiteral which was not defined. Using myString.
let firstCharacter = myString[0];
let lastCharacter = myString[myString.length - 1];
console.log("First Character:", firstCharacter);
console.log("Last Character:", lastCharacter);

// String Methods
// 1. charAt() - Returns the character at the specified index
let charAtIndex = myString.charAt(7);
console.log("Character at Index 7:", charAtIndex);

// 2. charCodeAt() - Returns the Unicode value of the character at the specified index
let charCodeAtIndex = myString.charCodeAt(7);
console.log("Unicode of Character at Index 7:", charCodeAtIndex);

// 3. concat() - Concatenates two or more strings
let additionalString = " Have a great day!";
let concatenatedString = myString.concat(additionalString);
console.log("Concatenated String:", concatenatedString);

// 4. indexOf() - Find the index of a specific character or substring
let indexOfComma = myString.indexOf(",");
console.log("Index of comma:", indexOfComma);

// 5. lastIndexOf() - Returns the index of the last occurrence of a specified value in a string
let lastIndexOfSpace = myString.lastIndexOf(" ");
console.log("Last Index of Space:", lastIndexOfSpace);

// 6. search() - Searches a string for a specified value and returns the position of the match
let searchResult = myString.search("World");
console.log("Search Result for 'World':", searchResult);


// match
// 7. match() - Retrieves the result of matching a string against a regular expression
let matchResult = myString.match(/o/g); // myString = "Hello, World!"; /
console.log("Match Result for 'o':", matchResult);

let str12 = " we saw 100 tigers and,  200 cats  in the forest. 2 of them were injured, but 20 were healthy.";
// 8. match() with regex - Using a regex to find all numbers in the string
let matchResult2 = str12.match(/\d{3}/g);
console.log("Match Result for numbers in str12:", matchResult2);


const emoji = "😊";
console.log(emoji.codePointAt(0)); 

let str15 = new String("\u{1F601}"); // Using code point for grinning face emoji
console.log(str15); // Outputs: 128512



// 15. valueOf() - Returns the primitive value of a String object
let primitiveValue = myString.valueOf();
console.log("Primitive Value:", primitiveValue);

// 16. split() - Splits a string into an array of substrings based on a specified separator
let splitString = str12.split(","); // 
console.log("Split String:", splitString);

// 17. trim() - Removes whitespace from both ends of a string
let spacedString = " Trim Me ";
let trimmedString = spacedString.trim();
console.log("Original String:", spacedString);
console.log("Trimmed String:", trimmedString);