function addSquares(a, b){
    function makeSquare(x){
        return x*x;
    }

    return makeSquare(a) + makeSquare(b)
}

console.log(addSquares(2,3)) // 4+9 = 13
console.log(addSquares(3,4)) // 9+16 = 25