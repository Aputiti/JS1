"use strict";
// const greeting = (name: string) => {
//     console.log(`Hello ${name}!`);
//   };
const alice = { name: "Alice" };
const bob = { name: "Bob", age: 25 };
const persons = [alice, bob];
persons.forEach((person) => {
    if (person.age) {
        console.log(person.age);
    }
});
