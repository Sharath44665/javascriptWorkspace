const objOne = {a:1, b: 2, c:3}
const objTwo = {d:4}

var mergeObj = {...objOne, ...objTwo}
console.log(mergeObj) //{ a: 1, b: 2, c: 3, d: 4 }              