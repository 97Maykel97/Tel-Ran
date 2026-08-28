// Task 1
const number1 = '1210';

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < number1.length; i++) {
  if (i % 2 === 0) {
    oddSum += Number(number1[i]);
  } else {
    evenSum += Number(number1[i]);
  }
}

if (oddSum === evenSum) {
  console.log(`${number1} is a lucky number`);
} else {
  console.log(`${number1} is not a lucky number`);
}

// Task 2
const number2 = '123420';

let firstSum = 0;
let lastSum = 0;

for (let i = 0; i < 3; i++) {
  firstSum += Number(number2[i]);
  lastSum += Number(number2[i + 3]);
}

if (firstSum === lastSum) {
  console.log(`${number2} is a lucky number`);
} else {
  console.log(`${number2} is not a lucky number`);
}
