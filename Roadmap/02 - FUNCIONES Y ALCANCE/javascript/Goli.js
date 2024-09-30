// 1. Create examples of basic functions
// Simple function
function Greet() {
	console.log("Hello, world!");
}

Greet();

// Functions that return a value
let a = 2;
let b = 3;

function Addition() {
	return a + b;
}

console.log(Addition());

// Functions with a single argument
function ArgumentGreet(name) {
	console.log(`Hello, ${name}!`);
}

ArgumentGreet("Diana");

// Functions with multiple arguments

function MultiArgGreeting(greet, name) {
	console.log(`${greet}, ${name}`);
}

MultiArgGreeting("You are here", "Goli");

// Functions with default arguments
function DefaultArgGreet(name = "ElPepe") {
	console.log(name);
}

DefaultArgGreet("Pipe");
DefaultArgGreet();

// Functions with arguments and return
function ReturnArgGreet(greet, name) {
	return `${greet}, ${name}`;
}

console.log(ReturnArgGreet("You da best", "Filip!"));

// Functions with multiple returns
function MultipleReturnGreet(greet, name) {
	return [(greet = "Sup'"), (name = " world!")];
}

console.log(MultipleReturnGreet());
let greet = MultipleReturnGreet();
console.log(`${greet}`);

// Functions inside a function
function BasicMath(a, b) {
	function Addition() {
		return a + b;
	}
	function Substaction() {
		return a - b;
	}
	console.log(Addition());
	console.log(Substaction());
}

BasicMath(10, 20);

// Function already included in the programming language

let arr = [1, 2, 3, 4, 5];

console.log(`The biggest number inside the array is: ${Math.max(...arr)}`); // Math has an integrated function called .max() for this kind of operations, the three dots (...) before the array are the spread syntax operator which deconstructs an array or object into separate variables.

// Block scoped variables
let x = "Global"; // This is a global variable, declared at the top of the scope

function BlockScoped() {
	let y = "Local"; // This is a local variable, declared inside a block
	console.log(`${x} variable, ${y} variable`);
}

BlockScoped();

// console.log(`${x} variable, ${y} variable`); // Error, y is only defined inside the function

// (Extra difficulty) Create a function that receives two strings as arguments and returns a number

/* 
	The function prints all the values from 1 to 100 with the following conditions:
		- If the number is a multiple of 3, show the string from the first argument
		- If the number is a multiple of 5, show the string from the second argument
		- If the number is a multiple of 3 and 5, show both strings
		- The function return the number of times a string has been printed

*/

function ExtraAssignment(number1, number2) {
	let counter = 0;
	for (let i = 1; i <= 100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(`${number1}, ${number2}`);
		} else if (i % 3 === 0) {
			console.log(number1);
		} else if (i % 5 === 0) {
			console.log(number2);
		} else {
			console.log(i);
			counter++;
		}
	}
	return counter;
}

console.log(ExtraAssignment("Uno", "Dos"));
