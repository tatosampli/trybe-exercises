let number = 5;
let ast = '*';
let linha = '';
let coluna = number;

for (let linhaIndex = 0; linhaIndex < number; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= number; colunaIndex += 1) {
    if (colunaIndex < coluna) {
      linha = linha + ' ';
    } else {
      linha = linha + ast;
    }
  }
  console.log(linha);
  linha = '';
  coluna -= 1;
};