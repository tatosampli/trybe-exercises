let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let n = 0; n < numbers.length; n +=1) {
  if (menor > numbers[n]) {
    menor = numbers[n];
  }
}
console.log(menor);

let menor2 = Math.min(...numbers);
console.log(menor2);