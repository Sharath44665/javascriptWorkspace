// rest operator ...
// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first] = fruits;
console.log(first) // apple

const [f, ...rest] = fruits;
console.log(f, rest); // apple [ 'orange', 'lemon', 'banana', 'pear' ]

const [ff, second, ...remainFruits] = fruits;
console.log(ff, second, remainFruits) // apple orange [ 'lemon', 'banana', 'pear' ]

const specificFruit = remainFruits.find((f) => {
    return f === "lemon";
});
console.log(specificFruit) // lemon

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
// const {name} = person;

// console.log(name); // john

// const {name, ...r} =person
// console.log(name, r) // john { lastName: 'smith', job: 'developer' }

const {lastName, ...restP} = person
// const { ...restP, lastName} = person // wont work
console.log(lastName, restP) ;// smith { name: 'john', job: 'developer' }

// function 

const getAvg = (name, ...scores) => {
    console.log(name); // john
    console.log(scores); // [ 89, 75, 88, 95 ] // if no spread operator [ [ 23, 45, 67, 89 ] ]
    let totalScore = scores.reduce((total, item) => {
        total += item;
        return total;
    },0);
    const scoreAvg = totalScore/scores.length;
    console.log(scoreAvg) ;// 86.75 // 56
}

const testScores = [23, 45, 67, 89]
// getAvg(person.name,  89, 75, 88, 95 )
getAvg(person.name, ...testScores);  