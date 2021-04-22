let a = prompt('Defina o valor do primeiro ângulo interno do triângulo:');
let b = prompt('Defina o valor do segundo ângulo interno do triângulo:');
let c = prompt('Defina o valor do terceiro ângulo interno do triângulo:');
let soma = a + b + c;

if (soma == 180) {
  console.log("true");
}
else if (soma > 0) {
  console.log("false");
}
else if (soma <= 0) {
  console.error("error");
}