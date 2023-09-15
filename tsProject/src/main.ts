// const greeting = (name: string) => {
//     console.log(`Hello ${name}!`);
//   };

//   greeting('Abdur');

interface Person {
  name: string;
  age?: number; // Optional property
}

const alice: Person = { name: "Alice" };
const bob: Person = { name: "Bob", age: 25 };

const persons: Person[] = [alice, bob];

persons.forEach((person) => {
  if(person.age) {
    console.log(person.age);
  }
})
