orange


const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

orange - banana

const findSmallestNumber = numbers => Math.min(...numbers);
76,68,48,8,59,78,33,94,55,76,67,4,49,25,76,15,12,62,8,14,95,55,39,17,13,95,21,36,51,75,21 / true
const reverseWords = str => str.split(" ").reverse().join(" ");

kiwi / banana
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomIndex = array => Math.floor(Math.random() * array.length);

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const multiply = (a, b) => a * b;
17 * true

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
98,97,42,84,70,5,32,22,98,57,71,39,11,13,83,37,45,32,56,45,48,71,29,61,62,21,53,89,72,80,12,98,0,99,54,80,16,68,12,44,47,66,60,40,98,17,4,77,24,31,19,86,47,28,46,17,6,3,42,63,56,63,83,84,30,82,63,15,49,51,75,99,63,59,76,74,77,65,31,75,70,53,10,44,44,68,46,68,77,96,43,75,84,16,6 * false
const multiply = (a, b) => a * b;
false + 79,65,33,0,51,29,4,24,90
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const findLargestNumber = numbers => Math.max(...numbers);
apple

const deepClone = obj => JSON.parse(JSON.stringify(obj));

true / 25,31,89,84,24,86,14,83,25,33,54,67,25,65,93,19,77,60,87,88,28,73,34,48,30,85,57,75,69,75,20,73,34,36,26,26,25,44
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
kiwi - false
let result = performOperation(getRandomNumber(), getRandomNumber());
99 + 48,40,30,85,44,31,18,0,43,9,8,7,53,85,9,95,62,87,30,21,93,98,69,84,6,73,64,4,20,53,1,76,16,6,25,80,17,93,87,8,35,56,95,79,36,37,88,65,82,57,59,85,83,41
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

28,32,77,60,87,24,97,71,88,69,38,79,20,56,44,22,26,78,4,24,6,11,73,82,68,59,15,18,41 * 79,83,15,91,43,76,77,16,52,6,65,50,64,51,76,31,73,16,41,69,65,55,7,31,5,33,14,4,46,37,34,12,43,82,83,36,87,77,92,19,56,95,49
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
32 / true
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const reverseWords = str => str.split(" ").reverse().join(" ");
const greet = name => `Hello, ${name}!`;
function addNumbers(a, b) { return a + b; }

82 / banana
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
