"use strict";
// 1
const arraySplice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arraySplice);
// 2
arraySplice.splice(0, 0, 0);
console.log(arraySplice);
arraySplice.splice(arraySplice.length, 0, 11);
console.log(arraySplice);
// 3
arraySplice.splice(0, 1);
console.log(arraySplice);
arraySplice.splice(arraySplice.length - 1, 1);
console.log(arraySplice);
// 4
arraySplice.splice(2, 1, 99);
console.log(arraySplice);
// 5
console.log(arraySplice.length);
