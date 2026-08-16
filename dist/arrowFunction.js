"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero!');
    }
    return a / b;
};
const multiply = (a, b) => a * b;
const calculate = (a, b, operation) => operation(a, b);
console.log(calculate(10, 10, add)); // 20
console.log(calculate(10, 10, subtract)); // 0
console.log(calculate(10, 10, divide)); // 1
console.log(calculate(10, 10, multiply)); // 100
