// Array Mutability
// Initi alize an array for mutability operati ons:
let mutableArray = [1, 2, 3, 4, 5];
console.log("Mutable Array:", mutableArray);
// Modify elements in the array:
mutableArray[2] = 10;
console.log("Modifi ed Array (Element at Index 2 changed to 10):", mutableArray);
// Change the length of the array:
mutableArray.length = 3;
console.log("Array aft er changing length to 3:", mutableArray);
// Add elements to the end of the array:
mutableArray.push(6, 7);
console.log("Array aft er adding elements to the end:", mutableArray);
// Remove elements from the end of the array:
mutableArray.pop();
console.log("Array aft er removing the last element:", mutableArray);
console.log("Mutable Array:", mutableArray);
// Array Immutability
// Initi alize an array for immutability operati ons:
let immutableArray = [1, 2, 3, 4, 5];
console.log("Immutable Array:", immutableArray);
// Create a new array using array methods:
let newArray = immutableArray.map(item => item * 2);
console.log("New Array using map method:", newArray);
// Avoid direct mutati ons:
let withoutModifi cati on = [...immutableArray, 6, 7];console.log("New Array without direct modifi cati on:", withoutModifi cation);
// Use array methods returning new arrays:
let fi lteredArray = immutableArray.fi lter(item => item > 2);
console.log("Filtered Array using fi lter method:", fi lteredArray);
console.log("Immutable Array:", immutableArray);
// Advanced Array Destructuring
// Initi alize an array for advanced destructuring operati ons:
let advancedDestructuringArray = [10, 20, 30, 40, 50];
console.log("Advanced Destructuring Array:", advancedDestructuringArray);
// Perform basic array destructuring:
let [fi rst, second, ...rest] = advancedDestructuringArray;
console.log("Destructured Variables - First:", fi rst, "Second:", second, "Rest:", rest);
// Implement nested destructuring:
let [x, [y, z]] = [1, [2, 3]];
console.log("Nested Destructuring - X:", x, "Y:", y, "Z:", z);
// Ignore the rest elements during destructuring:
let [a, , , b] = advancedDestructuringArray;
console.log("Ignoring Rest Elements - A:", a, "B:", b);
// Set default values during destructuring:
let [c, d = 0, e = 0] = [10];
console.log("Destructured Variables with Default Values - C:", c, "D:", d, "E:", e);
// Swap variables using destructuring:
let f = 5, g = 10;
[f, g] = [g, f];
console.log("Swapped Variables - F:", f, "G:", g);
// Uti lize destructuring in functi on parameters:functi on multi ply({ a, b }) {
  return a * b;
}
console.log("Functi on Parameter Destructuring Result:", multi ply({ a: 3, b: 4 }));
// Validati on
// Verify the accuracy of array operati ons:
console.assert(
  JSON.stringify(mutableArray) === JSON.stringify([1, 2, 10, 6]),
  "Mutability Validati on Failed"
);
console.assert(
  JSON.stringify(immutableArray) === JSON.stringify([1, 2, 3, 4, 5]),
  "Immutability Validati on Failed"
);
console.assert(
  JSON.stringify([fi rst, second, ...rest]) === JSON.stringify([10, 20, 30, 40, 50]),
  "Destructuring Validati on Failed"
);
console.log("Validati on Successful!");
