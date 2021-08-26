function transformScore(score) {
  const noValidScore = score < 0 || score > 100;
  const a = score >= 90;
  const b = score >= 80;
  const c = score >= 70;
  const d = score >= 60;

  switch (true) {
    case noValidScore: return "Nota invalida";
    case a: return "A";
    case b: return "B";
    case c: return "C";
    case d: return "D";
    default: return "F"
  }


  let finalScore;
  if (noValidScore) finalScore = "Nota invalida";
  else if (a) finalScore = "A";
  else if (b) finalScore = "B";
  else if (c) finalScore = "C";
  else if (d) finalScore = "D";
  else finalScore = "F";

  return finalScore;
}


const scoreStudent = 85;
const scoreFormat = transformScore(scoreStudent);
console.log("Nota do aluno é: " + scoreFormat);







