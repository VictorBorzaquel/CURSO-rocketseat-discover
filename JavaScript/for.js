const array = [];
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) continue;
  if (i === 51) break;
  array.push(i);
}
console.log(array);

// for...of = Pega o Valor da Propriedade
const arrayOf = [];
for (let number of array) {
  if (number > 10 && number < 30) arrayOf.push(number);
}

console.log(arrayOf);

// for...in = Pega o Nome da Propriedade
const person = {
  name: "Victor",
  age: 23,
  weight: 73
}
for (let property in person) {
  console.log(property + " : " + person[property]);
}