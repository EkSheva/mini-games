// Задание 1
let minNumber = (a, b) => { 
    if (a < b) 
        return a;
    else
        return b;
}; 
console.log (minNumber (8, 4));
console.log (minNumber (6, 6));

// Задание 2
function whatNumber(a) {
    a % 2 == 0 ? console.log ('Число четное') : console.log ('Число нечетное');
}
whatNumber(2);
whatNumber(3);

//     if (a % 2 == 0) {
//         console.log ('Число четное');
//     } else {
//         ;console.log ('Число нечетное')
//     }
// }

// Задание 3
const squareNumber = (c) => c **2;
console.log (squareNumber (8));
console.log (squareNumber (2));

const squareNumber1 = (c) => {
    let result = c **2;
    return result;
}
console.log (squareNumber1 (3));

// Задание 4
function askAge() {
    let answerUser = Number (prompt ('Сколько Вам лет?'));
    if (answerUser <0) {
    alert ('Вы ввели неправильное значение');
    } else if (answerUser<=12) {
         alert ('Привет, друг!');
    } else {
        alert ('Добро пожаловать!');
    }
}
askAge();

// Задание 5
function addNumbers() {
    let numberOne = Number (prompt ('Введите число'));
    let numberTwo = Number (prompt ('Введите число'));
    isNaN(numberOne && numberTwo) ? alert('Одно или оба значения не являются числом') : alert (numberOne * numberTwo);
}
addNumbers();

//     if (isNaN(numberOne && numberTwo)) { 
//         alert('Одно или оба значения не являются числом');
//     } else {
//         alert (numberOne * numberTwo);
//     }
// }


// Задание 6
function askNumbers() {
    let userNumber = Number (prompt ('Введите число'));
    if (isNaN(userNumber)) { 
        alert ('Переданный параметр не является числом');
    } else {
        let numberCube = userNumber **3;
        alert (`Введенное число в кубе равняется ${numberCube}`);
    }
}
askNumbers();

// Задание 7
const  circle1 = {
    radius: 10,
    getArea() {
        let squareCircle1 = Math.PI * (this.radius** 2);
        console.log (`Площадь круга: ${squareCircle1}`);
    },
    getPerimeter() {
        let perimeterCircle1 = 2 * Math.PI * this.radius;
        console.log (`Периметр круга: ${perimeterCircle1}`);
    }
}
      
    circle1.getArea(); 
    circle1.getPerimeter();
    
const  circle2 = {
    radius: 20,
    getArea() {
        let squareCircle2 = Math.PI * (this.radius** 2);
        console.log (`Площадь круга: ${squareCircle2}`);
    },
    getPerimeter() {
        let perimeterCircle2 = 2 * Math.PI * this.radius;
        console.log (`Периметр круга: ${perimeterCircle2}`);
    }
}
     
    circle2.getArea(); 
    circle2.getPerimeter(); 
 
// Игра 1    
// function game1() {
//     const value = Math.floor(Math.random() * 101);
//     let number;
//     while ( value !== number) {
//         number = Number (prompt ("Попробуй угадать число от 0 до 100"));
//         if (value>number) {
//             alert ("Не угадал( Загаданное число больше!");
            
//         } else if ( value<number) {
//             alert ("Не угадал( Загаданное число меньше!");
//         } else  {
//             break; 
//         }
//     }
//     console.log (value);
// }

// game1();