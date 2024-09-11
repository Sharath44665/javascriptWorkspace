// these methods converts object into arrays

const person ={
    name: "sharath",
    age: 25,
    status: "student"
}

const keysAr = Object.keys(person)
console.log(keysAr) // [ 'name', 'age', 'status' ]

const valuesAr = Object.values(person);
console.log(valuesAr) // [ 'sharath', 25, 'student' ]

const result  = Object.entries(person)
console.log(result) // [ [ 'name', 'sharath' ], [ 'age', 25 ], [ 'status', 'student' ] ]

const newResult = result.map((item) => {
    // console.log(item)
    // output:
    // [ 'name', 'sharath' ]
    // [ 'age', 25 ]
    // [ 'status', 'student' ]

    const [first, second] = item;
    return first
})
console.log(newResult) //[ 'name', 'age', 'status' ]


// for of :

for ( const item  of result){
    const [first, second] = item;
    console.log(first, second);
}

// or 

// for ( const [first, second]  of result){
//     console.log(first, second);
// }


// output:

// name sharath
// age 25
// status student

