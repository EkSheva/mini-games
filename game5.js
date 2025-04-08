
function game5() { 
const elements = ["камень", "ножницы", "бумага"];
const randomIndex = Math.floor(Math.random() * elements.length);
const randomElement =  elements[randomIndex]; 
let userAnswer = prompt('Сыграем? Выбирай: камень, ножницы или бумага?');
const rules = {
    "камень" : "ножницы",
    "ножницы" : "бумага",
    "бумага" : "камень"
  };

  if (userAnswer === randomElement) {
    alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
  } else if (rules[userAnswer] === randomElement) {
    alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
  } else  {
     alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
  }
  
}    
//   rules[userInput] === compInput // userInput = камень, rules[userInput] = ножницы, compInput = ножницы.
 
    // switch (userAnswer.toLowerCase()) {
    //     case 'камень':
    //         if (randomElement === 'ножницы') {
    //             alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
    //         } else if 
    //             (randomElement === 'бумага') {
    //             alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
    //         } else {
    //             alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
    //         }
    //         break;
    
    //     case 'ножницы':
    //         if (randomElement === 'бумага') {
    //             alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
    //         } else if 
    //             (randomElement === 'камень') {
    //             alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
    //         } else {
    //             alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
    //         } 
    //         break;
    
    //     case 'бумага':
    //         if (randomElement === 'камень') {
    //             alert (`Ты выйграл, ${userAnswer} побеждает ${randomElement}!`);
    //         } else if 
    //             (randomElement === 'ножницы') {
    //             alert (`Ты проиграл, ${randomElement} сильнее, чем ${userAnswer}`);
    //         } else {
    //             alert (`Ничья! Твой вариант и соперника: ${userAnswer}`);
    //         }  
    //         break;
    
    //     default:
    //         break;
    // }
  
