let custo = 342.56;
let venda = 479.80;
let custoTotal = custo * 1.2;
let quantidade = 1000;
let lucro = (venda - custoTotal) * quantidade;

if (custo >= 0 && venda >= 0 && quantidade >= 0) {
  console.log(`O lucro final é de R$ ${lucro}`);
}
else {
  console.error("Erro: Valor inválido");
}