function game6() {
    
    const btn = document.getElementById('game6');
    const fon = document.querySelector('.main');
    const randomHexColor=`#${Math.floor(Math.random() * 16777215).toString(16)}`;
    btn.addEventListener('click', () => {
        
        fon.style.background = randomHexColor;
    });
}