const value = 2

const promise = new Promise((resolve, reject) => {
    const randomVal = Math.floor(Math.random() * 3)
    console.log(randomVal)
    if (randomVal == value){
        resolve("got it right")
    }
    else{
        reject("wrong number")
    }
})

promise.then((data) => console.log(data)).catch((err) => console.log(err))

// output:
// 2
// got it right

// output:
// 0
// wrong number