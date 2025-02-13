// Задание 1
let password = 'пароль';
let passwordUser = prompt ('Введите пароль');
if (passwordUser === password) {
    console.log ("Пароль введен верно");
} else {
    console.log ("Пароль введен неправильно");
}

// Задание 2
let c = 1;
if (c >0 && c <10) {
    console.log ("Верно");
} else {
    console.log ("Неверно"); 
}

let d = 0;
if (d >0 && d <10) {
    console.log ("Верно");
} else {
    console.log ("Неверно"); 
}

let n = 10;
if (n >0 && n <10) {
    console.log ("Верно");
} else {
    console.log ("Неверно"); 
}

let m = -3;
if (m >0 && m <10) {
    console.log ("Верно");
} else {
    console.log ("Неверно"); 
}

let k = 2;
if (k >0 && k <10) {
    console.log ("Верно");
} else {
    console.log ("Неверно"); 
}

// Задание 3
let p = 50;
let r = 101;
if (p >100 || r >100) {
    console.log ("Верно");
} else {
    console.log ("Неверно"); 
}

// Задание 4
let a = '2';
let b = '3';
alert (Number (a) + Number (b));

//Задание 5
let monthNumber = Number (prompt ('Введите номер месяца'));

if (monthNumber <=12 && monthNumber >0) {
switch (monthNumber) {
    case 1:
        console.log ("Зима"); 
        break;

    case 2:
        console.log ("Зима"); 
        break;

    case 12:
        console.log ("Зима"); 
        break;

    case 3:
        console.log ("Весна"); 
        break;

    case 4:
        console.log ("Весна"); 
        break;

    case 5:
        console.log ("Весна"); 
        break;    

    case 6:
        console.log ("Лето"); 
        break;
    
    case 7:
        console.log ("Лето"); 
        break;

    case 8:
        console.log ("Лето"); 
        break;

    case 9:
        console.log ("Осень"); 
        break;

    case 10:
        console.log ("Осень"); 
        break;

    case 11:
        console.log ("Осень"); 
        break;
        
    default:
        break;
}
}

//Доп задание 1
let q = prompt ('Пожалуйста, введите любое число');

if ( isNaN(q)) {
    console.log (NaN);
    } else {
    console.log (q);

    if (q % 2 === 1) {
        alert ("Число нечетное");
    } else {
        alert ("Число четное");
}
}

//Доп задание 2
let clientOS = prompt ('0 или 1');

if (Number(clientOS) === 0) {
    console.log ("Установите версию приложения для iOS по ссылке");
} else {
    console.log ("Установите версию приложения для Android по ссылке");
}

//Доп задание 3
let clientOS1 = prompt ('0 или 1');
let clientDeviceYear = 2015;
if (Number(clientOS1) === 0) {
    if (clientDeviceYear >=2015) {
        console.log ("Установите версию приложения для iOS по ссылке");
    } else {
        console.log ("Установите облегченную версию приложения для iOS по ссылке");
    }
} else {
    if (clientDeviceYear >=2015) {
        console.log ("Установите версию приложения для Android по ссылке");
    } else {
        console.log ("Установите облегченную версию приложения для Android по ссылке");
    }
}



/*if (Number(clientOS1) === 0 && clientDeviceYear >=2015) {
    console.log ("Установите версию приложения для iOS по ссылке");
} else if (Number(clientOS1) === 0 && clientDeviceYear <2015){
    console.log ("Установите облегченную версию приложения для iOS по ссылке");
}

if (Number(clientOS1) === 1 && clientDeviceYear >=2015) {
    console.log ("Установите версию приложения для Android по ссылке");
} else if (Number(clientOS1) === 1 && clientDeviceYear <2015){
    console.log ("Установите облегченную версию приложения для Android по ссылке");
}*/