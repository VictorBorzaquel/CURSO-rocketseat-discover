console.group("Create Array");

const myArray = ["a", "b", "c", "d", "e"];
const myArrayWithConstructor = new Array("a", "b", "c", "d", "e");

console.log(myArray);
console.log(myArrayWithConstructor);

console.groupEnd();



console.group("create array from string");

const word = "manipulação";
const stringToArray = Array.from(word);
console.log(stringToArray);

console.groupEnd();



console.group("array manipulation");

const techs = ["html", "css", "js"];
console.log(techs);

techs.push("nodejs");
console.log(techs);

techs.unshift("sql");
console.log(techs);

techs.pop();
console.log(techs);

techs.shift();
console.log(techs);

console.log(techs.slice(1, 3));

techs.splice(1, 2);
console.log(techs);

techs.push("nodejs");
console.log(techs);

const index = techs.indexOf("nodejs");
techs.splice(index, 1);
console.log(techs);

console.groupEnd();

// Transformar array em string
array.join(", ")