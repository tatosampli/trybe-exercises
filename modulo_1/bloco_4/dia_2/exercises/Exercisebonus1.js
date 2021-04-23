let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let ic = 1; ic < numbers.length; ic += 1) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[ic] < numbers[i]) {
      let position = numbers[ic];
      numbers[ic] = numbers[i];
      numbers[i] = position;
    }
  }
}
console.log(numbers);