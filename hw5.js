// Задание 1
let minNumber = (a, b) => { 
    if (a < b) 
        return a;
    else
        return b;
}; 
console.log(minNumber (8, 4));
console.log(minNumber (6, 6));

// Задание 2
function whatNumber(a) {
    if (a % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}
console.log(whatNumber(2));
console.log(whatNumber(3));

// a % 2 == 0 ? console.log ('Число четное') : console.log ('Число нечетное');

// Задание 3
const squareNumber = (c) => c **2;
console.log(squareNumber (8));
console.log(squareNumber (2));

const squareNumber1 = (c) => {
    let result = c **2;
    return result;
}
console.log(squareNumber1 (3));

// Задание 4
function askAge() {
    let answerUser = Number(prompt ('Сколько Вам лет?'));
    if (answerUser < 0) {
    alert ('Вы ввели неправильное значение');
    } else if (answerUser<= 12) {
        alert ('Привет, друг!');
    } else {
        alert ('Добро пожаловать!');
    }
}
askAge();

// Задание 5
function addNumbers() {
    let numberOne = Number(prompt ('Введите число'));
    let numberTwo = Number(prompt ('Введите число'));
    if (isNaN(numberOne) || isNaN(numberTwo)) { 
        return 'Одно или оба значения не являются числом';
    } else {
        let result = numberOne * numberTwo;
        return result;
    }
}
console.log(addNumbers());

// isNaN(numberOne) || isNaN(numberTwo) { ? alert('Одно или оба значения не являются числом') : alert (numberOne * numberTwo);

// Задание 6
function askNumbers() {
    let userNumber = Number(prompt ('Введите число'));
    if (isNaN(userNumber)) { 
        return 'Переданный параметр не является числом';
    } else {
        let numberCube = userNumber **3;
        return `Введенное число в кубе равняется ${numberCube}`;
    }
}
console.log(askNumbers());

// Задание 7
const  circle1 = {
    radius: 10,
    getArea() {
        let squareCircle1 = Math.PI * (this.radius** 2);
        return `Площадь круга: ${squareCircle1}`;
    },
    getPerimeter() {
        let perimeterCircle1 = 2 * Math.PI * this.radius;
        return `Периметр круга: ${perimeterCircle1}`;
    }
}
      
console.log(circle1.getArea()); 
console.log(circle1.getPerimeter());
    
const  circle2 = {
    radius: 20,
    getArea() {
        let squareCircle2 = Math.PI * (this.radius** 2);
        return `Площадь круга: ${squareCircle2}`;
    },
    getPerimeter() {
        let perimeterCircle2 = 2 * Math.PI * this.radius;
        return `Периметр круга: ${perimeterCircle2}`;
    }
}
     
console.log(circle2.getArea()); 
console.log(circle2.getPerimeter());
 
