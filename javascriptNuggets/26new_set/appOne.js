
const demo = new Set()
console.log(demo) // Set(0) {}

// add
demo.add("first");
demo.add("first");
demo.add("first");

console.log(demo) // Set(1) { 'first' }

demo.add("second")
demo.add("third")
demo.add(4)
console.log(demo) // Set(3) { 'first', 'second', 'third', 4 }


// delete
const result  = demo.delete("third")
console.log(result) // true

const resultDemo = demo.delete("five");
console.log(resultDemo) // false

console.log(demo) // Set(3) { 'first', 'second', 4 }


const isValue = demo.has("first")
console.log(isValue) // true    

// clear





