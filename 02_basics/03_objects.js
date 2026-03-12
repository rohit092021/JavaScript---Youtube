// Object Literal
const mySym = Symbol("key1")

let jsUser = {
    name : "rohit",
    age : 22,
    [mySym] : "myKey1",
    "text name" : "hii",
    loginDays : ["monday", "Tuesday"] 
}
// console.log(jsUser)
// console.log(jsUser.name)
// console.log(jsUser["text name"])
// console.log(jsUser["name","age","loginDays"])
// console.log(jsUser[mySym])
// console.log(jsUser)

// Object.freeze(jsUser)
jsUser.age = 25;
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js Users")
}
jsUser.greeting = function(){
    console.log(`hello, ${this.name} your age is ${this.age}`)
}

console.log(jsUser.greeting())