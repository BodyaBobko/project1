const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

grape + 99

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
grape


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const deepClone = obj => JSON.parse(JSON.stringify(obj));
24 * 25,30,7,85,61,34,13,20,6,44,63,1,61,69,18,89,92,20,50,88,18,76,28,64,95,0,57,67,39,77,32,53,22,32,98,84,62,31,24,69,23,9,74,8,50,59,99,19,72,27,31,66,65,70,80,3,65,55,2,13,14,76,38,38,51,86,93,92,62,44,46,32,41,26,51,53,25,47,13,9,93,78,58
const greet = name => `Hello, ${name}!`;
const filterEvenNumbers = numbers => numbers.filter(isEven);
