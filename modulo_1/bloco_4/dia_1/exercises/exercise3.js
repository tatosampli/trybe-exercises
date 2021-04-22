let a = prompt('Defina o primeiro numero:');
let b = prompt('Defina o segundo numero:');
let c = prompt('Defina o terceiro numero:');

if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else if (c > a && c > b) {
  console.log(c);
}
else if (a == b == c) {
  console.log("Não se aplica");
}