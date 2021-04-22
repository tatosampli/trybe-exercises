let nota;
nota = 77;

if (nota >= 90 && nota <= 100) {
  console.log("A nota é conceito A");
}
else if (nota >= 80) {
  console.log("A nota é conceito B");
}
else if (nota >= 70) {
  console.log("A nota é conceito C");
}
else if (nota >= 60) {
  console.log("A nota é conceito D");
}
else if (nota >= 50) {
  console.log("A nota é conceito E");
}
else if (nota < 50) {
  console.log("A nota é conceito F");
}
else if (nota < 0 || nota > 100) {
  console.error("Erro: Nota inválida");
}