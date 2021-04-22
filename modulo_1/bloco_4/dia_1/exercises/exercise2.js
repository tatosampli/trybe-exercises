let a = prompt('Defina o primeiro numero:');
let b = prompt('Defina o segundo numero:');

if (a > b) {
  console.log(a);
}
else if (b > a) {
  console.log(b);
}
else if (b == a) {
  console.log("Não se aplica");
}