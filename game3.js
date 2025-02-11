    function game3() {

    let answer = prompt('Введите текст');
    if (answer === null || answer.trim() === "") {
        return;
    }
    const arr = answer.split("");
    console.log(arr);
    const newArr = arr.reverse();
    const result = newArr.join("");
    alert (result);
    }
