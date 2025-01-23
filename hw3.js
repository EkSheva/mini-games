// Задание 1
for (let i = 0; i <2; i++) {
    console.log ('Привет');
}

// Задание 2
for (let m = 1; m <=5; m++) {
    console.log (m);
}

// Задание 3
for (let c = 7; c <=22; c++) {
    console.log (c);
}

// Задание 4
const obj = {
    Kolya : '200',
    Vasya : '300',
    Petya : '400'
}
for (let key in obj) {
    console.log(`${key}: ${obj[key]} $`);
}

 // Задание 5
let n = 1000;
let num = 0;
while ( n >=50) {
    n /= 2;
    console.log (n);
    num++;
}
console.log(`Количество циклов: ${num}`);

 // Задание 6
for (let y = 7; y <=31; y +=7) {
    console.log (`Сегодня пятница, ${y}-е число. Необходимо подготовить отчет.`);
}

//Доп задание 1
let k = 100;
let iterations = 0;
while ( k >=0) {
    k -= 7
   console.log (k);
   iterations++;
}
console.log(`Количество циклов: ${iterations}`);

//Доп задание 2
let months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
for (let w = 0; w < months.length; w++) {
    console.log((w + 1) + ": " + months[w]);
}

//Доп задание 3
const book = {
    name : 'Преступление и наказание',
    author : 'Ф. М. Достоевский',
    genre : 'роман',
    year : '1866'
}
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
 }

 //Доп задание 4
let numbers = [ 5, 56, 51, 79, 1, 2, 6, 65, 14, 74];
let minNumber = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
         minNumber = numbers[i];
    }
}
console.log(minNumber);