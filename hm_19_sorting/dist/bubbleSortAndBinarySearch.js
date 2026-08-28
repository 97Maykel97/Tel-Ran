"use strict";
const numbers = [1, 5, 2, 9, 4];
// Bubble sort from smallest to largest
for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            const temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log('Sorted array:', numbers);
// Binary search
const target = 9;
let left = 0;
let right = numbers.length - 1;
let result = -1;
while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (numbers[middle] === target) {
        result = middle;
        break;
    }
    if (numbers[middle] < target) {
        left = middle + 1;
    }
    else {
        right = middle - 1;
    }
}
console.log(`Index of ${target}:`, result);
