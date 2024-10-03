// 1. Create examples of each data structure supported by the language

// Objects (In JavaScript, A collection of properties)
const myObject = {
	name: "Videogame",
	price: 60,
	size: 200,
};
const secondObject = {
	name: "Laptop",
	price: 900,
	weigth: 9,
};
const thirdObject = {
	name: "Car",
	price: 3000,
	seats: 4,
};

// Arrays (In JavaScript, indexed collections)
let animals = ["Dog", "Cat", "Parrot"];
let numbers = [1, 420, 69];
let objectArray = [myObject, secondObject, thirdObject];

// Sets (In JavaScript, a keyed collection, allows storing unique values)
let mySet = new Set([1, 3, 2, 5, 4]);

// WeakSets (In JavaScript, a collection of garbage-collectable values)
let myWeakSet = new WeakSet([myObject, secondObject, thirdObject]);

// Maps (In JavaScript, a keyed collection, holds key-value pairs)
let myMap = new Map([
	["Alfonso", 1],
	["Alonso", 2],
	["Altonso", 3],
]);

// WeakMaps (In JavaScript, holds key-value pairs whose keys must be objects and garbage-collectable)
let myWeakMap = new WeakMap([
	[myObject, "Object1"],
	[secondObject, "Object2"],
	[thirdObject, "Object3"],
]);

// 2. Apply Create, Read, Update and Delete (CRUD) to each data structure

// Objects CRUD
console.log(myObject);
myObject.price = 40;
console.log("After updating:");
console.log(myObject);
myObject.platform = "Steam";
console.log("After inserting:");
console.log(myObject);
delete myObject.size;
console.log("After deleting:");
console.log(myObject);

console.log("\n");
// Arrays CRUD
console.log(animals);
animals[2] = "Horse";
console.log("After updating:");
console.log(animals);
animals.push("Bat");
console.log("After inserting:");
console.log(animals);
animals.splice(2, 1);
console.log("After deleting:");
console.log(animals);

console.log("\n");
// Sets CRUD
console.log(mySet);
console.log(mySet.entries());
console.log(mySet.add(6));
console.log(mySet.delete(2));
console.log(mySet);
console.log(mySet.clear());
console.log(mySet);

console.log("\n");
// Maps CRUD
console.log(myMap);
console.log(myMap.get("Alfonso"));
console.log(myMap.set("Alfonso", 69));
console.log(myMap.set("Arnoldo", 4));
console.log(myMap.delete("Altonso"));
console.log(myMap);

// Extra assignment

let phoneBook = new Map([
	["Alfonso", 123456],
	["Diana", 111111],
	["ClaroCo", 696969],
]);

function SearchContact(input) {
	if (phoneBook.has(input)) {
		console.log(phoneBook.get(input));
	}
}

function UpdateContact(input) {
	if (phoneBook.has(input)) {
		var newPhone = prompt("Type new number");
		console.log(phoneBook.set(input, newPhone));
	}
}

function AddContact(input) {
	if (!phoneBook.has(input)) {
		var newContactPhone = prompt("Type new number");
		console.log(phoneBook.set(input, newContactPhone));
	}
}

function DeleteContact(input) {
	if (phoneBook.has(input)) {
		console.log(phoneBook.delete(input));
	}
}

function Main() {
	console.log(
		"Welcome to your phonebook\nWhich operation would you like to perform?\n 1. Search 2. Update 3. Add 4. Delete"
	);
	let choice = prompt("Select your operation");

	if (choice === "1") {
		let input = prompt("Insert contacts name");
		SearchContact(input);
	} else if (choice === "2") {
		input = prompt("Insert contacts name");
		UpdateContact(input);
	} else if (choice === "3") {
		input = prompt("Insert new contact name");
		AddContact(input);
	} else if (choice === "4") {
		input = prompt("Insert contact name for deletion");
		DeleteContact(input);
	} else {
		console.log("Invalid choice");
	}
}

Main();

//Running on browser console by adding an index.html file
