let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (let n = 0; n < numbers.length; n +=1) {
  if (maior < numbers[n]) {
    maior = numbers[n];
  }
}
console.log(maior);

let maior2 = Math.max(...numbers);
console.log(maior2);