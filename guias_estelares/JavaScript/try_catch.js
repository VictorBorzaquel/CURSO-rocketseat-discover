function sayMyName(name) {
  if (!name) throw new Error("O nome é obrigatório");

  console.log(name);
}

try {
  let nome // = "Victor"
  sayMyName(nome);
} catch (e) {
  console.log(e);
}

console.log("Após o Error");