const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
      sister: 'jane',
    },
  };


const firstName = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

console.log(firstName,lastName,sister); // bob sanders jane

// const {first, last, city} = bob;

// console.log(first, last, city) // bob sanders chicago

// const {first, last, city, zip} = bob;
// console.log(first, last, city, zip) // bob sanders chicago undefined

// order doesnt matter : 

// const {last, first, city, zip} = bob;
// console.log(first, last, city, zip) // bob sanders chicago undefined

// creating alias 
// const {last:aliasName, first, city} = bob;
// console.log(aliasName, first, city) // sanders bob chicago

// let last = "some value";

// const {last:aliasName, first, city, zip, siblings:{sister:favSibling}} = bob;
// console.log(aliasName, first, city, zip, favSibling) // sanders bob chicago undefined jane

function printPerson(person){
    // console.log(person.first); // bob
    const {first, last} = person;
    console.log(first, last); // bob sanders

}

printPerson(bob);

function printDemo({first, last, siblings:{sister:sis}}){
    console.log(first,last,sis) // bob sanders jane
}

printDemo(bob)


