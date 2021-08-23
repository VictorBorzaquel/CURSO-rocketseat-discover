function transformDegree(degree) {
  const isCelsius = degree.toUpperCase().includes('C');
  const isFahrenheit = degree.toUpperCase().includes('F');

  if (!isCelsius && !isFahrenheit) throw new Error('Grau não identificado');

  const fahrenheitToCelsius = number => (number - 32) * 5/9;
  const celsiusToFahrenheit = number => number * 9/5 + 32;

  const degreeNumber = Number(degree.replace(/[^\d]+/g,''));

  let transform;
  if(isCelsius) transform = celsiusToFahrenheit(degreeNumber) + "°F";
  else transform = fahrenheitToCelsius(degreeNumber) + "°C";

  return transform;
}

try {
  console.log(transformDegree("10°C"));
  console.log(transformDegree("50°F"));
  console.log(transformDegree("50°X"));
} catch(e) {
  console.log(e.message);
}

