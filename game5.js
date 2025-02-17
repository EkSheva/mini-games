
function game5() { 
const elements = ["камень", "ножницы", "бумага"];
const randomIndex = Math.floor(Math.random() * elements.length);
const randomElement =  elements[randomIndex]; 
let userAnswer = prompt('Сыграем? Выбирай: камень, ножницы или бумага?');
 
    switch (userAnswer.toLowerCase()) {
        case 'камень':
            if (randomElement === 'ножницы') {
                alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
            } else if 
                (randomElement === 'бумага') {
                alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
            } else {
                alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
            }
            break;
    
        case 'ножницы':
            if (randomElement === 'бумага') {
                alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
            } else if 
                (randomElement === 'камень') {
                alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
            } else {
                alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
            } 
            break;
    
        case 'бумага':
            if (randomElement === 'камень') {
                alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
            } else if 
                (randomElement === 'ножницы') {
                alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
            } else {
                alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
            }  
            break;
    
        default:
            break;
    }
}    
