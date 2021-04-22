let custo = prompt('Defina o preço de custo:');
let venda = prompt('Defina o preço de venda:');
let custoTotal = custo * 1.2;
let quantidade = prompt('Defina a quantidade de produtos');
let lucro = (venda - custoTotal) * quantidade;

if (custo >= 0 && venda >= 0 && quantidade >= 0) {
  console.log(`O lucro final é de R$ ${lucro}`);
}
else {
  console.error("Erro: Valor inválido");
}