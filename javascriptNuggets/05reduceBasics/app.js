const staff = [
    {name: "Sharath", job:"developer", age: 20, salary : 100},
    {name: "Angela", job:"designer", age: 25, salary : 300},
    {name: "susan", job:"the boss", age: 30, salary : 400},
    {name: "anna", job:"intern", age: 35, salary : 10},
];


const dailyTotal = staff.reduce((total, person) => {

    total += person.salary
    return total
},0)

console.log(dailyTotal) // staff