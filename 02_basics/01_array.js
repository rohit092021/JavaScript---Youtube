let arr1 = [1,2,3,4,5]
let arr2 = ["a", "b", "c", "d"]
const arr3 = new Array(1,2,3,4)
console.log(arr3[2])
arr3.push(3)  // push add values in last
console.log(arr3)
arr1.pop() // remove values from last
console.log(arr1)
arr1.unshift(9) // add value at 0th index
console.log(arr1)

console.log(arr1.includes(9)) //check value occours in array or not.
console.log(arr1.indexOf(3))

//slice, splice
let arr4 ="qwerty"
console.log(arr4.slice(1,3))
console.log(arr4.splice(1,3))

// const myn2 = myArray.splice(1,3)
// console.log("C", myArray)
// console.log(myn2)