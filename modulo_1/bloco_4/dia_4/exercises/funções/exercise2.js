function numMaior(numeros) {
  let numMaior = 0;
  for (let index in numeros) {
    if (numeros[numMaior] < numeros[index]) {
      numMaior = index;
    }
  }
  return numMaior;
}

console.log(numMaior([2, 3, 6, 7, 10, 1]));