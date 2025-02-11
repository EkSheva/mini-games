// Задание 1

let string = 'js';
console.log(string.toUpperCase());

// Задание 2

function stringArray() {
    let string = 'Хлеб';
    const arr = ['Бородинский хлеб', 'Вусный хлеб', 'Столичный хлеб', 'Хлеб свежий', 'Хлеб утренний'];
    const newArr = [];
    arr.forEach((product) => {
    if (product.toLowerCase().startsWith(string.toLowerCase())) {
    newArr.push(product);
    }
    });
    return newArr;
}
console.log(stringArray());

// Задание 3

let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

// Задание 4

const numbersMinMax = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...numbersMinMax));
console.log(Math.max(...numbersMinMax));

// Задание 5

function randomNumber() {
    const value = Math.ceil(Math.random() * 10);
    console.log(value);
}
randomNumber();

// Задание 6

function doubledArray() {
    let number = 12;
    const arr = [];
    for (let i = 0; i < (number/2); i++) {
      arr.push(Math.ceil(Math.random() * number));
    } 
    console.log(arr);
}
doubledArray();

// Задание 7

function randomNumbers() {
    let minNumber =10;
    let maxNumber =22;
    const numbArray =[];
 for (i = minNumber; i<=maxNumber; i++) {
    numbArray.push(i);
 }
    console.log(numbArray);

    let randomIndex = Math.ceil(Math.random() * numbArray.length);
    let randomElement = numbArray[randomIndex];

    console.log(randomElement);
}
randomNumbers();

// Задание 8

let myDate = new Date();
console.log(myDate);

// Задание 9

let currentDate = new Date();
let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = +currentDate + days73;
let daysAfter73 = new Date(searchDate);
console.log(daysAfter73);

// Задание 10

function date() {

const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let today = new Date();
let fullDate = "Дата: " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + " - это " + days[today.getDay()] + ". " + "Время: " + today.getHours() + " : "+ today.getMinutes() + " : " + today.getSeconds();
return fullDate;
}
console.log(date());

// let fullTime2 =  "Время: " + today.toTimeString();