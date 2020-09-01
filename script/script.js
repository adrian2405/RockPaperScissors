    const container = document.querySelector('#container');
    container.innerHTML = '<img id="logo" src="./images/logo.png" alt="logo">';

    const btns = document.createElement('div');
    btns.classList.add('buttons');
    container.appendChild(btns);
    btns.innerHTML = '<button id="rock" class="sound"></button><button id="paper" class="sound"></button><button id="scissors" class="sound"></button>';

    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);

    const info = document.createElement('div');
    info.classList.add('info');
    container.appendChild(info);

    const pick = document.createElement('audio');
    pick.classList.add('playing');
    container.appendChild(pick);
    pick.setAttribute("src","./sounds/pick.wav");

    const gameOver = document.createElement('audio');
    gameOver.classList.add('playing');
    container.appendChild(gameOver);
    gameOver.setAttribute("src", "./sounds/gameover.wav");

    function computerPlay(){
        let jugada = ['rock', 'paper', 'scissors'];
        let aleatorio = jugada[Math.floor(Math.random() * jugada.length)];
        return aleatorio;
    }

     var win = 0;
     var loose = 0;

    function reset(){

        if(loose == 5){
            gameOver.play();
             win = 0, loose = 0;
             content.innerHTML = '<h1> Puntuación </h1> <h3>CPU: ' + loose + ' YOU: ' +win+ '</h3>';
             info.innerHTML = '';
             alert('¡Ha ganado tu oponente, inténtalo de nuevo!');
        }else if(win == 5){
            gameOver.play();
             win = 0, loose = 0;
             content.innerHTML = '<h1> Puntuación </h1> <h3>CPU: ' + loose + ' YOU: ' +win+ '</h3>';
             info.innerHTML = '';
             alert('¡Has ganado, enhorabuena!');
        }
    }

    content.innerHTML = '<h1> Puntuación </h1> <h3>CPU: ' + loose + ' YOU: ' +win+ '</h3>';

    function playRound(playerSelection, computerSelection) {

        info.innerHTML = '<h3>Tú has elegido: '+playerSelection+'</h3><h3>El ordenador ha elegido: '+computerSelection+'</h3>';

            if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || 
            (playerSelection == 'scissors' && computerSelection == 'rock')){
                loose++;
        return content.innerHTML = '<h1> Puntuación </h1> <h3>CPU: ' + loose + ' YOU: ' +win+ '</h3>';

        }else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'scissors' && computerSelection == 'paper')){
                win++;
        return content.innerHTML = '<h1> Puntuación </h1> <h3>CPU: ' + loose + ' YOU: ' +win+ '</h3>';

        }
    }
 
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const playerSelection = button.id;
        pick.play();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        reset();
    });
});

