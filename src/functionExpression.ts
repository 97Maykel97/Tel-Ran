import type { TCalculate, TMathOperation } from './calculatorTypes';

const add: TMathOperation = function (a, b) {
	return a + b;
};

const subtract: TMathOperation = function (a, b) {
	return a - b;
};

const divide: TMathOperation = function (a, b) {
	if (b === 0) {
		throw new Error('Cannot divide by zero!');
	}

	return a / b;
};

const multiply: TMathOperation = function (a, b) {
	return a * b;
};

const calculate: TCalculate = function (a, b, operation) {
	return operation(a, b);
};

console.log(calculate(10, 10, add)); // 20
console.log(calculate(10, 10, subtract)); // 0
console.log(calculate(10, 10, divide)); // 1
console.log(calculate(10, 10, multiply)); // 100
