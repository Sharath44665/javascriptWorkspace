// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';

const letters = [...udemy];
console.log(letters); // [ 'u', 'd', 'e', 'm', 'y' ]


const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

let friends = [boys, girls, bestFriend];
console.log(friends) // [ [ 'john', 'peter', 'bob' ], [ 'susan', 'anna' ], 'arnold' ]

friends = [...boys, ...girls, bestFriend];
console.log(friends); // [ 'john', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

// reference:
let newFrieds = friends;
newFrieds[0] = "Sharath";
console.log(newFrieds); // [ 'Sharath', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(friends); /// [ 'Sharath', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

// from the above first item is sharath in newFriends and friedns, which we dont want
// i want changes only in newfrineds not in friends
// copy

let anotherNewFriends = [...friends];
anotherNewFriends[0] = "first User";
console.log(anotherNewFriends); // [ 'first User', 'peter', 'bob', 'susan', 'anna', 'arnold' ]
console.log(friends); // [ 'Sharath', 'peter', 'bob', 'susan', 'anna', 'arnold' ]

// ES2018 - ES8 Objects

const person = {name:"sharath", job:"developer"};
const newPersons = {...person, city:"udupi"};
const anotherPerson = {...person, name:"Angela", city:"london"};

console.log(person); // { name: 'sharath', job: 'developer' }
console.log(anotherPerson); // { name: 'Angela', job: 'developer', city: 'london' }
console.log(newPersons); // { name: 'sharath', job: 'developer', city: 'udupi' }


