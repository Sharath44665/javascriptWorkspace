function outside(x){
    function inside(y){
        return x + y;
    }
    return inside;
}

var whatsInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it

// console.log(whatsInside); // [Function: inside]

console.log(whatsInside(3)); // 3+3
console.log(whatsInside(4)) //3+4

console.log(outside(1)(3)) // 4
