const people = [
    {
      name: 'bob',
      location: { street: '123 main street', timezone: { offset: '+7:00' } },
    },
    { name: 'peter', location: { street: '123 Pine street' } },
    {
      name: 'susan',
      location: { street: '123 Apple street', timezone: { offset: '+9:00' } },
    },
  ];

// some of the above is the example of the random user api

people.forEach((person) => {
    // console.log(person.name);
    // console.log(person.location.timezone.offset); // throws error
    // console.log(person.location && person.location.timezone && person.location.timezone.offset);
    console.log(person?.location?.timezone?.offset || "hello world")
// output:
// +7:00
// hello world //undefined
// +9:00

});

// console.log(true && "hello world"); // hello world
// console.log(false && "this is demo wont execute") // false