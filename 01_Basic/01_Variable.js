const accountId = 144553
let accountEmail = "Usman@google.com"
var accountPassword = "12345"
accountCity = "islamabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "Usm@n.com"
accountPassword = "21212121"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])




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

