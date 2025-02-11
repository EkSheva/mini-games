// Задание 1
const numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) 
        break; 
}

// Задание 2
const numbs = [1, 5, 4, 10, 0, 3];
let position = numbs.indexOf(4);
console.log(position);

numbs.forEach((el, index) => {
    if (el == 4)
    console.log(`${index}: ${el}`);
});

// Задание 3
const numb = [1, 3, 5, 10, 20];
let joinedText = numb.join(" ");
console.log(joinedText);

// Задание 4
const arr = [];

for (let i = 0; i < 3; i++) {
  arr[i] = [];
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1;
  }
}
console.log(arr);

// Задание 5
const one = [1, 1, 1];
one.push (2, 2, 2);
console.log(one);

// Задание 6
const sortArr = [9, 8, 7, 'a', 6, 5];
sortArr.sort();
sortArr.pop();
console.log(sortArr);

const filteredArr = sortArr.filter(item => typeof item === 'number');
console.log(filteredArr);

// Задание 7
const riddle = [9, 8, 7, 6, 5];
let answer = Number(prompt ('Угадай число'));
let isFound = riddle.includes(answer); {
    if (isFound === true) {
        alert ("Угадал");
    } else {
     alert ("Не угадал");
    }
}

// Задание 8
let line = "abcdef";
let splitLine = line.split('');
splitLine.reverse();
const joinLine = splitLine.join("");
console.log(joinLine);

// Задание 9
const arrive = [[1, 2, 3],[4, 5, 6]];
const newArrive = [...arrive[0], ...arrive[1]];
console.log(newArrive);

// Задание 10
const sumNumbers = [ 5, 5, 5, 7, 1, 2, 6, 6, 1, 4];
for (let i = 0; i <= 8; i++) {
    console.log(sumNumbers[i] + sumNumbers[i+1]);
}

for (let i = 0; i < sumNumbers.length; i++) {
if (sumNumbers[i+1]) {
    console.log(sumNumbers[i] + sumNumbers[i+1]);
}
}

// Задание 11
function squearNumbers() {
    const onerNumbers = [9, 8, 7, 6, 5];
    const updateNumbers =  onerNumbers.map(item => item **2);
    return updateNumbers;
}
console.log(squearNumbers());

// Задание 12
function stringLeght() {
    const string = ['hello', 'my', 'friend'];
    const leghtWords =  string.map(item => item.length);
    return leghtWords;
}
console.log(stringLeght());

// Задание 13
function difNumbers() {
    const allNumbers = [-9, 8, -7, 6, -5];
    const negativeNumbers = allNumbers.filter(item => item <0);
    return negativeNumbers;
}
console.log(difNumbers());
// Задание 14
function createRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10) + 1);
    }
    return arr;
}
  
const randomArray = createRandomArray(14);
console.log(randomArray);

const sevenNumbers = randomArray.filter(item => item % 2 == 0);
console.log(sevenNumbers);

// Задание 15
function createRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * 10) + 1);
    }
    return arr;
}
  
const newArray = createRandomArray(6);
console.log(newArray);

const sum = newArray.reduce((total, number) => total + number, 0)/newArray.length;
console.log(sum);