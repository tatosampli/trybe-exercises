let number = 7;
let ast = '*';
let linha = '';
let meio = (number + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let linhaIndex = 1; linhaIndex <= meio; linhaIndex += 1) {
  linha = '';
  for (let colunaIndex = 1; colunaIndex <= number; colunaIndex += 1) {
    if (colunaIndex == esquerda || colunaIndex == direita || linhaIndex == meio) {
      linha += ast;
    } else {
      linha += ' ';
    }
  }
  direita += 1;
  esquerda -= 1;
  console.log(linha);  
};