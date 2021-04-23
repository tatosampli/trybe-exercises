let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let id = 1; id < numbers.length; id += 1) {
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[id] > numbers[i]) {
      let position = numbers[id];
      numbers[id] = numbers[i];
      numbers[i] = position;
    }
  }
}
console.log(numbers);