const family = { incomes: [84,51,6,4,78840], expenses: [4,67,644,8787] };

function calculateBalance(family) {
  const sumTotal = (array) => array.reduce((acc, cur) => acc + cur);
  const formatCurrency = new Intl.NumberFormat('pt-BR', { style: 'currency',currency: 'BRL',minimumFractionDigits: 2 })

  const total = {}
  for (let i in family) total[i] = sumTotal(family[i]); 
  
  const totalBalance = total['incomes'] - total['expenses'];

  const balanceText = totalBalance > 0 ? "positivo!" : "negativo!";

  const formatBalance = formatCurrency.format(totalBalance);

  const message = `Seu saldo é ${balanceText}: ${formatBalance}`;

  return message;
}



console.log(calculateBalance(family));