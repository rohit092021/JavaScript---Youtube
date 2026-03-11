// dates
let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())
console.log(myDate.getTimezoneOffset())
console.log(myDate.getHours())
console.log(myDate.getMonth())
console.log(myDate.toUTCString())

let myCreatedDate = new Date(2004,3, 31)
console.log(myCreatedDate.toDateString());

let myCreatedDate_1 = new Date(2004,3, 31,4,5)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let newDate = new Date()
console.log(newDate)
console.log(newDate.getFullYear())