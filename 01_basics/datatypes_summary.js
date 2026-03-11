// javascript is the dynamically typed language - it means types of operator is determined at the run TimeRanges.

// Primitive (call by value)
// 7 taypes: String, Number,boolean, null, undefined, symbol, bigInnt

const score=100
const scoreValue = 100.4

const Isloggedin = false
const outSideTemp = null
let userEmail;

const id=Symbol('123')
const authorId = Symbol('123')
console.log(typeof id)
console.log(typeof authorId)
const bigNumber = 9876543219876676547654328665544n

// Non- Primitive(reference types)
// Array, Objects, function

//Array
let array = ["rohit", "rahul", 12, 'plm']
console.log(array)
console.table(array)

//Object
let object = {
    age:12, Name: "Rohit", weight: 68
}
console.table(object)

//Function
const myFunction = function(){
    console.log("Hello ");
}
myFunction();
console.log(myFunction)
// console.log(function)
console.log(typeof bigNumber)
console.log(typeof array)

/* =====================================================================================
Stack and heap memory
stack memory copy crete krta h, heap memory Reference(original value)
Primitive data types me stack memory used hoti h
Non-primitive me heap memory use hoti h */

let myName = "Rohit"
let myFullname = myName
myFullname = "Rohit tarkar"

console.log(myName)
console.log(myFullname)

let user = {
    email:"abc@gmail.com",
    upi:"user@ptsbi",
    phone: 876543210
}
let user2 = user;
user2.phone = 9999999
console.log(user)
console.log(user2)