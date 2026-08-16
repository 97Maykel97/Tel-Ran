"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero!');
    }
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 5, add)); // 15
console.log(calculate(10, 5, subtract)); // 5
console.log(calculate(10, 5, divide)); // 2
console.log(calculate(10, 5, multiply)); // 50
