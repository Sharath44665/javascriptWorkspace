const person = {
    name: "Sharath",
    age : 25,
    status : "student"
}

// not a good practice to use this loop, instead use for of

for( const propertyName in person){
    console.log(`${propertyName}: ${person[propertyName]}`)

// output:
// name: Sharath
// age: 25
// status: student
}



