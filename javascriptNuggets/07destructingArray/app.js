// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3); // orange banana lemon

// const [john, peter, bob, anna, kelly] = friends;
// console.log(john); // john

// const [john, peter, bob, anna, kelly, easy] = friends;
// console.log(john, peter, bob, anna, kelly, easy) // john peter bob anna kelly, undefined

// const [userName, peter, bob, anna, kelly] = friends;
// console.log(userName, peter, bob, anna, kelly); // john peter bob anna kelly


const [john, , bob, , kelly, easy] = friends;
console.log(john,  bob,  kelly, easy) // john bob kelly undefined

let first = 'bob';
let second  = 'john';

// let temp  = first;
// first = second;
// second = temp;

// the above code can be done as follows

// [second, first] = [first, second]
[first, second] = [second, first]
    
console.log(first, second) // john bob

