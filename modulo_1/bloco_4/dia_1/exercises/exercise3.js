let a = 7;
let b = 19;
let c = 56;

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