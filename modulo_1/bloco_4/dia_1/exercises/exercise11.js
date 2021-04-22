let bruto = prompt('Defina o valor do salário bruto:');
let valorINSS;
let valorIR;
let liquido;

if (bruto <= 1556.94) {
  valorINSS = bruto * 0.92;
}
else if (bruto >= 1556.95 && bruto <= 2594.92) {
  valorINSS = bruto * 0.91;
}
else if (bruto >= 2594.93 && bruto <= 5189.82) {
  valorINSS = bruto * 0.89;
}
else if (bruto > 5189.82) {
  valorINSS = bruto - 570.88;
}

if (valorINSS <= 1903.98) {
  valorIR = valorINSS;
}
else if (valorINSS >= 1903.99 && valorINSS <= 2826.65) {
  valorIR = (valorINSS * 0.075) - 142.80;
}
else if (valorINSS >= 2826.66 && valorINSS <= 3751.05) {
  valorIR = (valorINSS * 0.15) - 354.80;
}
else if (valorINSS >= 3751.06 && valorINSS <= 4664.68) {
  valorIR = (valorINSS * 0.225) - 636.13;
}
else if (valorINSS > 4664.68) {
  valorIR = (valorINSS * 0.275) - 869.36;
}

liquido = valorINSS - valorIR;

console.log(`O salário liquido é R$ ${liquido}`);