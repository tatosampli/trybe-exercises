function numMenor(numeros) {
  let numMenor = 0;
  for (let index in numeros) {
    if (numeros[numMenor] > numeros[index]) {
      numMenor = index;
    }
  }
  return numMenor;
}

console.log(numMenor([2, 4, 6, 7, 10, 0, -3]));