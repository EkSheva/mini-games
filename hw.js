// Задание 1
let a = 10;
alert (a);
a = 20;
alert (a);

// Задание 2
let year = 2007;
alert (year);

// Задание 3
let firstname = 'Брендон Айк';
alert (firstname);

// Задание 4
let c = 10;
let d = 2;

let sum = c + d;
alert (sum);

let difference = c - d;
alert (difference);

let product = c * d; 
alert (product); 

let quotient = c / d; 
alert (quotient); 

//Задание 5
let m = 2;
let n = 5;
let result = m ** n; 
alert (result);

//Задание 6
let k = 9;
let l = 2;
let remainder = k % l; 
alert (remainder);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt ('Сколько вам лет?');
alert (age);

//Задание 9
const  user = {
    name: 'Иван',
    isAdmin: true,
    age: 35
 };
 console.log(user.name);
 console.log(user.age);
 user['isAdmin'] = true;

 //Задание 10
 let greeting = "Привет";
 let name1 = prompt ('Введите Ваше имя?');
 let phrase = `Привет, ${name1}!`;
 alert (phrase);


//Доп задание
let number = prompt ('Загадайте любое число');

let newNumber1 = number*2;
alert (newNumber1);

let newNumber2 = newNumber1 + 10;
alert (newNumber2);

let newNumber3 = newNumber2 / 10;
alert (newNumber3);

let newNumber4 = newNumber3 - number;
alert (newNumber4);

alert ('Ответ равен 5');


