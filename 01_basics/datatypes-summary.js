//acc to how data is stored and accessed in memory we divide data into primitive and non primitive datatypes

//  Primitive   : call by value

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.*/

const score = 100
const scoreValue = 100.3    //treated as number only

const isLoggedIn = false
const outsideTemp = null
let userEmail;  

const id = Symbol('123')
const anotherId = Symbol('123') //return type is also symbol

console.log(id === anotherId);  //not equal

// const bigNumber = 3456543576654356754n   bigInt

// Reference (Non primitive)    

// Array, Objects, Functions //its datatypes is function only

const heros = ["shaktiman", "naagraj", "doga"]; //arrays
let myObj = {       //objects stored as key-value pairs
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  //to know datatype of any var

console.log(typeof myFunction);  // is object function only

//++++++++++++++++++++++++++++++++++++++++

// Stack(primitive) - works on copied value
//  Heap(non-primitive) - changes the original value

let myName = "Suruchi"  //in stack

let myNewName = myName

myNewName = "Richa"     //changes copy

console.log(myName);
console.log(myNewName);

let userOne = {         //heap memory
    email : "hc@hc.com",
    upi : "hc&isl"
}

let userTwo = userOne

userTwo.email = "abc@xyz.com"   //changes both
console.log(userOne.email);
console.log(userTwo.email);
