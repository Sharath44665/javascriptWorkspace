# Promise

### pending:
``` js
const promise = new Promise((resolve, reject) => { // can call them whatever we want , but given is the standard

})
console.log(promise);
```

Output:

![promisePending](./img/promisePendingScreenshot_20240909_175854.png)

### fulfilled:

``` js

const promise = new Promise((resolve, reject) => { // can call them whatever we want , but given is the standard
    resolve()
})
console.log(promise);
```

![promiseFul](./img/promiseFulScreenshot_20240909_180435.png)   

``` js
const promise = new Promise((resolve, reject) => { // can call them whatever we want , but given is the standard
    resolve("hello world")
})
console.log(promise);
```

![promiseHello](./img/promiseHelloScreenshot_20240909_180718.png)

### Rejected: 

``` js
const promise = new Promise((resolve, reject) => { // can call them whatever we want , but given is the standard
    reject()
})
console.log(promise);
```

![promiseReject](./img/promiseRejectScreenshot_20240909_180941.png)




