// filter - returns new array, can manipulate the size of array(unlike map), returns based on condition
// find = returns single instance (object), returns first match, if no match = undefined

const people = [
    {name: "Sharath", job:"developer", age: 20},
    {name: "Angela", job:"designer", age: 25},
    {name: "susan", job:"the boss", age: 30},
    {name: "anna", job:"intern", age: 35},
];


const fruits = ["orange", "apple", "mango", "pears"]

const youngPeople = people.filter((person) => {
    // if (person.age <= 25){
    //     return person
    // }
    // or

    return person.age <= 25;
})

console.log(youngPeople)

// output 
// [
//     { name: 'Sharath', job: 'developer', age: 20 },
//     { name: 'Angela', job: 'designer', age: 25 }
//   ]
  

const dev = people.filter((person) => {
    return person.job === "developer";
})

console.log(dev); // only developer is returned like above output


// no match

const seniorDev = people.filter((p) => {
    return p.job === "senior dev";
})

console.log(seniorDev); // []

// find

const sharath = people.find((item) => {
    return item.name === "Sharath";
})

console.log(sharath) // { name: 'Sharath', job: 'developer', age: 20 }
console.log(sharath.job) // developer

const fruit = fruits.find((f) => {
    return f === "mango";
})

console.log(fruit) // mango

// no match
const oldPerson = people.find((person) => {
    return person.age > 35
})



console.log(oldPerson) // undefined

// multiple match

const randomPerson  = people.find((person) => {
    return person.age < 35
})

console.log(randomPerson) // { name: 'Sharath', job: 'developer', age: 20 }

