import type { TMathOperation, TCalculate } from './calculatorTypes';

const add: TMathOperation = (a, b) => a + b;
const subtract: TMathOperation = (a, b) => a - b;

const divide: TMathOperation = (a, b) => {
	if (b === 0) {
		throw new Error('Cannot divide by zero!');
	}

	return a / b;
};

const multiply: TMathOperation = (a, b) => a * b;

const calculate: TCalculate = (a, b, operation) => operation(a, b);

console.log(calculate(10, 10, add)); // 20
console.log(calculate(10, 10, subtract)); // 0
console.log(calculate(10, 10, divide)); // 1
console.log(calculate(10, 10, multiply)); // 100
