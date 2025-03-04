function game4() {

    const quiz = [
                   {
                       question: "Какого цвета небо?",
                       options: ["1. Красный", "2. Синий", "3. Зеленый"],
                       correctAnswer: 2 
                   },
                   {
                       question: "Сколько дней в неделе?",
                       options: ["1. Шесть", "2. Семь", "3. Восемь"],
                       correctAnswer: 2
                   },
                   {
                       question: "Сколько у человека пальцев на одной руке?",
                       options: ["1. Четыре", "2. Пять", "3. Шесть"],
                       correctAnswer: 2
                   }
               ];
  
    let counter = 0;
    for (let i= 0; i < quiz.length; i++) {
        unswers = Number(prompt(`Ответьте на вопрос: ${quiz[i].question}, используя варианты ответа: ${quiz[i].options} В ответе укажите номер верного варианта.`));
        if (unswers===quiz[i].correctAnswer) {
            alert ('Верно');
            counter++;
        } else {
            alert ('Неверно');
        }
    }
    alert (`Верных ответов ${counter} из ${quiz.length}`); 
    }
