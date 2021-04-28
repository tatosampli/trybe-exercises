let divisor = 1;
let number = 29;

for (let n = 2; n <= number; n += 1) {
  if (number % n === 0) divisor += 1;
};

if (divisor === 2) console.log(number + ' é primo');
else console.log(number + ' não é primo');