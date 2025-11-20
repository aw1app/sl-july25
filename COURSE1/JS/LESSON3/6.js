// Array Sorti ng
//Initi alize an array of unsorted elements:
let unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
console.log("Unsorted Array:", unsortedArray);
// Use the sort() method to sort the array in ascending order:
let ascendingSortedArray = unsortedArray.slice().sort((a, b) => a - b);
console.log("Ascending Sorted Array:", ascendingSortedArray);
// Sort the array in descending order:
let descendingSortedArray = unsortedArray.slice().sort((a, b) => b - a);
console.log("Descending Sorted Array:", descendingSortedArray);
// Array Searching
// Initi alize an array for searching operati ons:
let searchArray = [10, 20, 30, 40, 50, 60, 70];
console.log("Search Array:", searchArray);
// Use the fi lter() method to fi nd elements greater than 30:
let fi lteredArray = searchArray.fi lter(element => element > 30);
console.log("Filtered Array (Greater than 30):", fi lteredArray);
// Use the fi nd() method to fi nd the fi rst element equal to 40:
let foundElement = searchArray.fi nd(element => element === 40);
console.log("Found Element (Equal to 40):", foundElement);
// Use the includes() method to check if the array includes 50:
let includesElement = searchArray.includes(50);
console.log("Includes Element (50):", includesElement);
// Use the indexOf() method to fi nd the index of 60:
let indexOfElement = searchArray.indexOf(60);
console.log("Index of Element (60):", indexOfElement);
// Spread Syntax// Initi alize an array to demonstrate the spread syntax:
let originalArray = [1, 2, 3];
console.log("Original Array:", originalArray);
// Create a new array by spreading the elements of the original array:
let newArray = [...originalArray, 4, 5, 6];
console.log("New Array using Spread Syntax:", newArray);
// Validati on
// Verify the accuracy of sorti ng, searching, and spread syntax operati ons:
console.assert(
  JSON.stringify(ascendingSortedArray) === JSON.stringify([1, 1, 2, 3, 4, 5, 5, 6, 9]),
  "Sorti ng Validati on Failed"
);
console.assert(
  foundElement === 40,
  "Searching Validati on Failed"
);
console.assert(
  JSON.stringify(newArray) === JSON.stringify([1, 2, 3, 4, 5, 6]),
  "Spread Syntax Validati on Failed"
);
console.log("Validati on Successful!");
