import type { TMathOperation } from './calculatorTypes';

function add(a: number, b: number): number {
	return a + b;
}

function subtract(a: number, b: number): number {
	return a - b;
}

function divide(a: number, b: number): number {
	if (b === 0) {
		throw new Error('Cannot divide by zero!');
	}

	return a / b;
}

function multiply(a: number, b: number): number {
	return a * b;
}

function calculate(
	a: number,
	b: number,
	operation: TMathOperation,
): number {
	return operation(a, b);
}

console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 5, multiply)); // 50
