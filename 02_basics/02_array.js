const marbal = ["rohit", "tarkar", "aman", "karan"]
const dc = ["spider", "super", "man"]
// marbal.push(dc)

const newMarbal = marbal.concat(dc)
// console.log(marbal)
// console.log(newMarbal)

// spread(alag-alag)
const all_arrays = [...marbal, ...dc] // it will work same as concat, but spread is used mostly
// console.log(all_arrays)

// another way to spread out
const another_arrays = [1,2,3,[4,5,6],7,[8,9,[0,1]]]
const real_another_arrays = another_arrays.flat(Infinity)
// console.log(real_another_arrays)

console.log(Array.from("Hitesh")) // create array, elements will be the letters of Hitesh
console.log(Array.from({name:"Rohit"})) 

let a=1;
let b=2;
let c=3;
console.log(Array.of(a,b,c))
