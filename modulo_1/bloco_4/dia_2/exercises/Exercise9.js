let numbers = [];
let resultado;

for (let n = 1; n < 26; n +=1) {
  numbers.push(n);
}

for (let i = 0; i < numbers.length; i += 1) {
  resultado = numbers[i] / 2;
  console.log(resultado);
}