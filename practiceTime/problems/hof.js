


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(num => num % 2 == 0));
console.log(numbers.map(num => num**2));

console.log(numbers.reduce((acc, currenNum)=> currenNum+acc, 0));

console.log(numbers.map(num => num*2).filter(num => num > 10));

console.log(numbers.some(num => num % 7 == 0));









