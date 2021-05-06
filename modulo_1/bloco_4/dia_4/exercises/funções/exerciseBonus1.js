function Romanos(roma) {
  let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let numbers = [];
  let result = 0;

  for (let index in roma) {
    numbers[index] = romanos[roma[index]];
  }

  for (let index in numbers) {
    if (numbers[index] < numbers[index + 1]) {
      numbers[index + 1] = numbers[index + 1] - numbers[index];
    } else {
      result += numbers[index];
    }
  }

  return result;
}

console.log(Romanos('MMXVIII'));