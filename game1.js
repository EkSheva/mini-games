// Игра 1    
function game1() {
    const value = Math.floor(Math.random() * 101);
    let number;
    while ( value !== number) {
        number = Number (prompt ("Попробуй угадать число от 0 до 100"));
        if (value>number) {
            alert ("Не угадал( Загаданное число больше!");
            
        } else if ( value<number) {
            alert ("Не угадал( Загаданное число меньше!");
        } else  {
            alert (`Верно! Это число ${value}`);
            break; 
        }
    }
    console.log (value);
}
