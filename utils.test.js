const { add, average, clamp } = require('./utils');

console.assert(add(2, 3) === 5, 'add failed');
console.assert(average([1, 2, 3, 4]) === 2.5, 'average failed');
console.assert(clamp(15, 0, 10) === 10, 'clamp failed');

console.log('utils checks passed');
