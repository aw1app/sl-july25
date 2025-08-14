//--- Lesson 04 Demo 02: AdvanceStringOperations.js ---
// String Interpolation
let name = "John";
let age = 25;

// Using string interpolation to create a dynamic string
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log("String Interpolation:", greeting);


// Escape Characters
let singleQuoteString = 'This is a single quote (\').';
let doubleQuoteString = "This is a double quote (\").";

let backslashString = "This is a backslash (\\).";
let newlineString = "This is a new line (\n).";
let carriageReturnString = "This is a carriage return (\r).";
let tabString = "This is a tab (\t).";

console.log("Escape Characters:");
console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(backslashString);
console.log(newlineString);
console.log(carriageReturnString);
console.log(tabString);



// String Comparison
let string1 = "apple";
let string2 = "banana";

// Using equality operators
let isEqual = string1 === string2;
console.log("Equality Check:", isEqual);

// Using localeCompare()
let comparisonResult = string1.localeCompare(string2);
console.log("String Comparison Result:", comparisonResult);

// Using localeCompare() with different locales
console.log("ä".localeCompare("z", "en")); // English locale

console.log("German local compare test ", "ä".localeCompare("a", "de")); // German locale

console.log("SECTION 2");


// String Manipulation
let originalString = " JavaScript is amazing! ";

// Changing case
let lowerCaseString = originalString.toLowerCase();
let upperCaseString = originalString.toUpperCase();

// Trimming whitespace
let trimmedString = originalString.trim();

// Replacing text
let replacedString = originalString.replace("amazing", "powerful");

console.log("Original String:", originalString);
console.log("Lowercased String:", lowerCaseString);
console.log("Uppercased String:", upperCaseString);
console.log("Trimmed String:", trimmedString);
console.log("Replaced String:", replacedString);




// Splitting strings into arrays
let splittedStringArr = originalString.split(" ");
console.log("Splitted String Array:", splittedStringArr);


// String Iteration
let iterableString = "Iteration";

// Using traditional for loop
console.log("String Iteration (Traditional for loop):");
for (let i = 0; i < iterableString.length; i++) {
    console.log(iterableString[i]);
};


// Leveraging the charAt method
console.log("String Iteration (charAt method):");
for (let i = 0; i < iterableString.length; i++) {
    console.log(iterableString.charAt(i));
};


// Reversed string construction
console.log("String Iteration (Reversed string construction):");
let reversedString = "";
for (let i = iterableString.length - 1; i >= 0; i--) {
    reversedString += iterableString[i];
}
console.log(reversedString);


console.log("UNICODE CHARACTERS");

// Unicode and Characters
let unicodeString = "Unicode: \u{1F604}";
console.log("Unicode String:", unicodeString);

// Check Unicode code points
for (let char of unicodeString) {
    console.log(`Code Point: U+${char.codePointAt(0).toString(16).toUpperCase()}`);
}

// Deal with different characters
console.log("Character at Index 9:", unicodeString.charAt(9));

// Perform simple string manipulation with Unicode
let modifiedUnicodeString = unicodeString.replace(/\u{1F604}/u, "Happy Face");
console.log("Modified Unicode String:", modifiedUnicodeString);

// Regular Expressions (Regex)
let regexPattern = /a[bcd]+/; // Matches 'a' followed by one or more of 'b', 'c', or 'd'
let regexTestString = "abcbcdabcdd";
let regexResult = regexPattern.exec(regexTestString);
console.log("Regex Result:", regexResult);

// // RegExp creation
let dynamicPattern = new RegExp("[0-9]{3}", "g");
let dynamicResult = "123-456-789".match(dynamicPattern);
console.log("Dynamic RegExp Result:", dynamicResult);
