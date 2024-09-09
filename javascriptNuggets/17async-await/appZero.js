//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const example = async () => {
    return "hello there..."
}

// console.log(example());

async function someFn() {
    const result = await example()
    console.log(result)
}

someFn(); // hello there...
