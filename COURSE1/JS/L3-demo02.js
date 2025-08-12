let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);

//Comparison Operators
console.log("Is Equal:", num1 === num2);
console.log("Is Not Equal:", num1 !== num2);
console.log("Greater Than:", num1 > num2);
console.log("Less Than:", num1 < num2);


//Logical Operators
console.log("AND Operator:", (num1 > 0) && (num2 > 0));
console.log("OR Operator:", (num1 > 0) || (num2 > 0));
console.log("NOT Operator:", !(num1 > 0));


//Operator Precedence and Associativity
console.log("Precedence Result:", num1 + num2 * 3); // 25
console.log("Associativity Result:", num1 - num2 + 5);

//Bitwise Operators
console.log("Bitwise AND:", num1 & num2);
console.log("Bitwise OR:", num1 | num2);
console.log("Bitwise XOR:", num1 ^ num2);
console.log("Bitwise NOT:", ~num1);
console.log("Left Shift:", num1 << 1);
console.log("Right Shift:", num1 >> 1);

//Ternary Operator
console.log("Ternary Result:", num1 > num2 ? "Num1 is greater" : "Num2 is greater");
let str10 = num1 > num2 ? "Num1 is greater" : "Num2 is greater"
console.log("str10",str10);

//New Feature: Numeric Separators (ES2021+)
let largeNumber = 1_000_000_000; // Improves readability
console.log("Large Number with Separators:", largeNumber);

