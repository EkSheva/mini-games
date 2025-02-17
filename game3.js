    function game3() {

    let answer = prompt('Введите текст');
    if (answer === null || answer.trim() === "") {
        return;
    }
    const arr = answer.split("");
    arr.reverse(); 
    const result = arr.join("");

    alert(result);
}