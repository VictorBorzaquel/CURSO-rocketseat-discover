// new = Create new object

const myName = new String("Victor");

myName.nomeDoMeio = "Hugo";
myName.sobrenome = "Borzaquel";

console.log(myName);

console.log(typeof myName);

delete myName.nomeDoMeio;

console.log(myName);