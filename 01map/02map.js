var users = [
    {name: "john", age: 30},
    {name: "sharath", age: 25},
    {name: "Eva", age: 35}
];

const allUsersNames = users.map(user => user.name);
console.log(allUsersNames); // [ 'john', 'sharath', 'Eva' ]

var getAllAges = users.map(ages => ages.age);
console.log(getAllAges) // [ 30, 25, 35 ]

// need to check the spread operator

            
