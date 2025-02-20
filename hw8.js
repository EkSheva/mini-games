// Задание 1

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age));

// Задание 2

function isPositive(i) {
    
if (i >=0) {
return i;
} 
}

function isMale(man) {
    if (man.gender === 'male') {
        return man.gender;
    } 
}

function filter(arr,ruleFunction ) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (ruleFunction(arr[i])) {
            newArr.push((arr[i]));
        }
    } 
    return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive));

const peopleTwo = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleTwo, isMale));


// Задание 3

let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

// Задание 4

function delayForSecondOne(callback) {
    setTimeout(callback, 1000);
}

delayForSecondOne(function () {
   console.log('Привет, Глеб1!');
})

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(()=>sayHi('Maks'));

