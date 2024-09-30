// 1. Create examples using every type of operators in your language of choice

let x = 2;
let y = 3;

// Increment and decrement
console.log(`y value before operations: ${x}`);
console.log(`Postfix increment x: ${x++}`); // Postfix increment operator
console.log(`Prefix decrement x: ${x--}`); // Postfix decrement operator
console.log(`y value before operations: ${y}`);
console.log(`Postfix increment y: ${++y}`); // Prefix increment operator
console.log(`Prefix decrement y: ${--y}`); // Prefix decrement operator

// Unary operators (an operation with only one operand)

// Initialization of an object type
const obj = {
	name: "example",
	value: 10,

	isPrivate() {
		return false;
	},
};

console.log(`Object name: ${obj.name}`); // Object property before deletion
delete obj.name; // Delete, removes a property from an object
console.log(`Object name delete:${obj.name}`); // Object property after deletion
console.log(`Object is private: ${obj.isPrivate()}`);
const disposable = void x;
console.log(`Void x: ${disposable}`); // Void always returns undefined

console.log(`Y is: ${typeof y}`); // Typeof returns the type of a given object

const unary = 1;
const unaryStr = "example";
console.log(`Integer after unary plus: ${+unary}`); // Unary plus converts to  number
console.log(`String after unary: ${+unaryStr}`);
console.log(`True after unary plus: ${+true}`);
console.log(`False after unary plus: ${+false}`);

console.log(`Integer after unary negation: ${-unary}`); // Unary negation converts to number and negates it
console.log(`String after unary negation: ${-unaryStr}`);
console.log(`True after unary negation: ${-true}`);
console.log(`False after unary negation: ${-false}`);

const bitwise = 5;
console.log(`Original number: ${bitwise}`);
console.log(`Binary representation: 00000000000000000000000000000101`);
console.log(`Bitwise NOT on integer: ${~bitwise}`); // Bitwise NOT reverses all 0's and 1's from the binary representation of a number and returns a number or bigInt
console.log(`New binary representation: 11111111111111111111111111111010`);

console.log(`Is x:(2) > y:(3) : ${!(x > y)}`); // Logical NOT, negates operand

// Artithmetic operators, return a numerical value
console.log(`Exponentiation: ${x ** 2}`);
console.log(`Multiplication: ${x * y}`);
console.log(`Division: ${y / 2}`);
console.log(`Remainder: ${y % x}`);
console.log(`Addition: ${x + y}`);
console.log(`Substraction: ${y - x}`);

// Relational operators, compares its operands and returns a boolean value

console.log(`Less than < : ${x < y}`);
console.log(`Greater than > : ${x > y}`);
console.log(`Less or equal than  <= : ${x <= y}`);
console.log(`Greater or equal than >= : ${x >= y}`);
// InstanceOf determines whether an object is an instance of another object
// In determines whether an object has a given property

//Equality operators, returns boolean value based on equality comparison
const strX = "2";

console.log(`Equality: ${x == strX}`);
console.log(`Inequality: ${y != strX}`);
console.log(`Strict equality: ${x === strX}`);
console.log(`Strict inequality: ${x !== strX}`);

// Bitwise shift operators, operations to shift all bits of the operand
console.log(`Bitwise left shift: ${x << y} `);
console.log(`Bitwise right shift: ${y >> x} `);
console.log(`Bitwise unsigned right shift: ${y >>> x} `);

// Binary bitwise operators
console.log(`Bitwise AND: ${x & y}`);
console.log(`Bitwise OR: ${x | y}`);
console.log(`Bitwise XOR: ${x ^ y}`);

// Binary logical operators
console.log(`Logical AND: ${x < y && y < 0}`); // AND, Only true if all operands are true

console.log(`Logical OR: ${x > y || y > 0}`); // OR, Only true if one or more of its operands is true

const foo = null ?? "default";
console.log(`Nullish Coaslescing: ${foo}`); // Nullish Coalescing Operator, returns the right-hand side operand when the left-hand side operand is null or undefined

console.log(`Nullish Coaslescing: ${x ?? 10}`); // returns true since x is not undefined (x = 2)

//Assignment operators, assigns a value to its left operand based on the value of the right operand

console.log(`Assignment operator (temp = 2): ${(temp = 2)}`);
console.log(`Multiplication operator (x * y): ${(x *= y)}`);
console.log(`Division assignment (y / x):${(y /= x)}`);
console.log(`Remainder assignment (x % 2):${(x %= 2)}`);
console.log(`Addition assignment (x + y):${(x += y)}`);
console.log(`Substraction assignment (y - x): ${(y -= x)}`);
// And so on for almost all operators

// Control structures
// Control flow statements
// Conditionals
let a = 0;
let b = 0;

console.log("\n");
while (a < 10) {
	console.log(a);
	a++;
}

console.log("\n");
do {
	b++;
} while (b < 10);

console.log(b);

console.log("\n");
if (x > y) {
	console.log("When x is greater than y this prints");
} else if (x === y) {
	console.log("When x is equal to y this prints");
} else {
	console.log("If none of the conditons are met this prints");
}

console.log("\n");
for (let i = 0; i < 5; i++) {
	console.log(i);
}

// (Extra difficulty) Make a program that prints in console all the numbers from 10 trough 55, including: even numbers, and numbers that are not the 16 nor multiples of 3.

function ExtraAssignment() {
	console.log("\nExtra assignment!!!");
	for (let i = 10; i <= 55; i++) {
		if (i != 16 && i % 3 !== 0 && i % 2 === 0) {
			console.log(i);
		}
	}
}

ExtraAssignment();
