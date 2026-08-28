"use strict";
const words = [
    'apple',
    'banana',
    'cat',
    'elephant',
    'dog',
    'computer',
    'book',
    'sun',
    'watermelon',
    'house',
];
// Function Declaration
function comparator(a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
}
console.log('Function Declaration:', comparator('apple', 'banana'));
// Function Expression
const comparatorExpression = function (a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
};
console.log('Function Expression:', comparatorExpression('apple', 'banana'));
// Arrow Function
const comparatorArrow = (a, b) => {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
};
console.log('Arrow Function:', comparatorArrow('apple', 'banana'));
function findMax(array, compare) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (compare(array[i], max) === 1) {
            max = array[i];
        }
    }
    return max;
}
console.log('Longest word:', findMax(words, comparator));
