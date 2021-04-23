let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];

for (let im = 0; im < numbers.length; im += 1) {
    if (im < numbers.length-1) {
      mult.push(numbers[im] * numbers[im+1]);
    }
    else if (im = numbers.length-1) {
      mult.push(numbers[im] * 2);
    }
  }
console.log(mult);