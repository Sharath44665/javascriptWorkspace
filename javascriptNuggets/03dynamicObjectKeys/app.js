const person = ['hello', 'great'];

const anotherPerson = {name: "Sharath"};
console.log(anotherPerson.name); // Sharath
anotherPerson.age = 25;
console.log(anotherPerson); // { name: 'Sharath', age: 25 }


const items = {
    "featured-items": ["item1", "item2"]
};

console.log(items["featured-items"]); // [ 'item1', 'item2' ]


let appState = "loading";
appState = "error";
const keyName = "computer"
const app = {
    [appState]:true
};


// console.log(app); // { loading: true }

// console.log(app) // { error: true }

app[keyName] = "linux";

console.log(app) // { error: true, computer: 'linux' }


const state = {
    loading:true,
    name:'',
    job : ''
}

function updateState(key, val){
    state[key] = val;
}

updateState('name', "Sharath");

console.log(state) // { loading: true, name: 'Sharath', job: '' }

updateState('job', "developer");

console.log(state) // { loading: true, name: 'Sharath', job: 'developer' }

