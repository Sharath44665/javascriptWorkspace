var name = "Sharath"

var x= 20, y=3;

function multiply(){
    return x*y;
}

console.log(multiply()) // 60

function exampleFn(){
    var a=2, b=3;

    function add(){
        return `${name} added values: ${a+b}`; 
    }

    return add();

}

console.log(exampleFn()) // Sharath added values: 5
