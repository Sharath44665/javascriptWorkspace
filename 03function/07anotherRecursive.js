function exampleFn(x){
    if (x < 0){
        return
    }
    console.log(`begin: ${x}`);
    exampleFn(x-1);
    console.log(`end: ${x}`)
}

exampleFn(3);

// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3