"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Usman Ali")


let name = "Usman"
let age = 22
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object



//                   (Short Summary)

// JavaScript: var, let, and const 
// •	var → Function-scoped, can be redeclared and reassigned.
// •	let → Block-scoped, can be reassigned, but not redeclared.
// •	const → Block-scoped, cannot be redeclared or reassigned.
// •	All are hoisted, but let and const stay in the Temporal Dead Zone (TDZ) until declared.
// •	Use const for fixed values, let for changing ones, and avoid var.
// •	const objects/arrays can have their contents changed, but not reassigned.
// Example:
// console.log(a); var a = 5; // undefined
// console.log(b); let b = 5; // ReferenceError

