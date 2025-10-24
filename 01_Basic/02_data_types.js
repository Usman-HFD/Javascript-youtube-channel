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




// 🔹 JavaScript Data Types (Short Summary)

// number → for all numeric values (integer, float, NaN, Infinity).
// bigint → for very large integers beyond number limit (end with n).
// string → text inside quotes (' ' or " " or `).
// boolean → true or false values.
// null → intentional empty value (means nothing).
// undefined → declared but no value assigned.
// symbol → unique and immutable identifier (used as object keys).
// All above are primitive data types (store single value).
// typeof null → "object" (known JS bug).
// typeof NaN → "number".
// BigInt and Number can’t be mixed in operations.
// Strings are immutable (cannot be changed directly).
// Example:
// let x = 10;             // number
// let big = 123n;         // bigint
// let name = "Usman";     // string
// let isOk = true;        // boolean
// let data = null;        // null
// let a;                  // undefined
// let id = Symbol("id");  // symbol
