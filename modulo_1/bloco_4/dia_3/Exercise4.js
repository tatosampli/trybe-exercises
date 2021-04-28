let number = 5;
let ast = '*';
let linha = '';
let meio = (number + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let linhaIndex = 0; linhaIndex <= meio; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= number; colunaIndex += 1) {
    if (colunaIndex > esquerda && colunaIndex < direita) {
      linha = linha + ast;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1;
};