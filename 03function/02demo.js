function demo(myFunc, a){
    var result = new Array(a.length); //initialize result with length of a
    result.fill(0); // fill with zero =  [ 0, 0, 0 ] 
    for (var idx = 0; idx< a.length; idx++){
        result[idx] =myFunc(a[idx]);
    }
    return result;

}

var cubeResult = function (x){
    return x*x*x;
}

// console.log(cubeResult(3))
// s=[1, 3, 5]
// demo(3, s )

myArr = [1, 2, 3, 4, 5]
var output = demo(cubeResult, myArr)

console.log(output) // [ 1, 8, 27, 64, 125 ]
