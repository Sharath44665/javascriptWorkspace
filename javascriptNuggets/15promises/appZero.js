// pending, rejected, fullfilled 

const promise = new Promise((resolve, reject) => { // can call them whatever we want , but given is the standard
    // resolve("hello wonrld")
    // resolve([1, 3, 5])
    reject("we have error")
})
console.log(promise);

promise.then((data) => {
    console.log(data); // hello world // [ 1, 3, 5 ]
}).catch((err) => {console.log(err)}) // we have error

