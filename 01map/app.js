const people = [
    {
        name: "sharath",
        age: 18,
        position: "developer"
    },
    {
        name: "ana",
        age: 19,
        position: "designer"
    },
    {
        name: "susan",
        age: 22,
        position: "the boss"
    },

]
// const ages =  people.map(()=>{})
// console.log(ages) // [ undefined, undefined, undefined ]

// const ages= people.map((person)=>{
//     return "hello"
// })

// console.log(ages) // [ 'hello', 'hello', 'hello' ]

// const ages= people.map((person)=>{
//     return person.age
// })

// console.log(ages) // [ 18, 19, 22 ]

const newPeople = people.map((item) => {
    return {
        firstName : item.name.toUpperCase(),
        oldAge : item.age +20

    }
})

console.log(newPeople)


// output:
// [
//     { firstName: 'SHARATH', oldAge: 38 },
//     { firstName: 'ANA', oldAge: 39 },
//     { firstName: 'SUSAN', oldAge: 42 }
// ]


personNames = people.map((person)=> `<h2>${person.name}</h2>`) // single line stmt

const result = document.getElementById("result")
result.innerHTML= personNames.join('')

        
