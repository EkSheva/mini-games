function game2() {
    const value1 = Math.floor(Math.random() * 10);
    const value2 = Math.floor(Math.random() * 10);
    const simbol = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * simbol.length);
    const randomElement = simbol[randomIndex]; 
    let userAns=Number(prompt(`Решите задачу ${value1} ${randomElement} ${value2} *В задаче с делением, укажите два знака после запятой, с округлением в бОльшую сторону. Если число целое, то после запятой указать 00`));
    let result;
    if (randomElement=== '+') {
        result = value1 + value2;
    } else if (randomElement=== '-'){
        result = value1 - value2;
    } else if (randomElement=== '*'){
        result = value1 * value2;
    } else {
        result =Math.round(value1 / value2);
    }
    if (result===userAns) {
        alert ("Верно!")
    } else {
        alert (`Неверно! Ответ: ${result}`);
    }
}
