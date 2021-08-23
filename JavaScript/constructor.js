/* 
# Function() constructor 

- expressão new
- criar um novo objeto
- this keyword
*/


class Person {
  constructor(name) {
    this.name = name;
    this.walk = () => this.name + ' está andando';
  }
}

const victor = new Person('Victor');
const karen = new Person('Karen');

console.log(victor);

console.log(victor.walk());
console.log(karen.walk());

// Classes default JavaScript
const data = new Date('2021-08-16');

console.log(data);