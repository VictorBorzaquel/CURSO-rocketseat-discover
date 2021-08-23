console.group("View propriety prototype string in number");

const number = 123;
const string = 'abcd';
console.log(string.length);
console.log(String(number).length);

console.groupEnd();



console.group("Format Number in String");

const number2 = 321.5465852;
const formatNumber2 = "R$ " + number2.toFixed(2).replace(".", ",");
console.log(formatNumber2);
console.log(Number(formatNumber2));

console.groupEnd();



console.group("String manipulation");

const phrase = "Victor e Karen Agora!";
const phraseArray = phrase.split(" ");
const phraseWithUnderscore = phraseArray.join("_");
console.log(phraseWithUnderscore.toLowerCase());

const phraseHasVictor = phrase.toLowerCase().includes("victor");
console.log(phraseHasVictor);

console.groupEnd();