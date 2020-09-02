    const container = document.querySelector('#container');
    container.innerHTML = '<img id="logo" src="./images/logo.png" alt="logo">';

    const winner = document.createElement('div');
    winner.classList.add('winner');
    container.appendChild(winner);

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

    winner.innerHTML = '<h1>Choose your hand, get 5 points and win!</h1>'

     var win = 0;
     var loose = 0;

    function reset(){

        if(loose == 5){
            gameOver.play();
             win = 0, loose = 0;
             content.innerHTML = '<h1> SCORE: </h1> <h2>CPU: ' + loose + ' YOU: ' +win+ '</h2>';
             info.innerHTML = '';
             winner.innerHTML = '<h1>You loose, try again!</h1>'
        }else if(win == 5){
            gameOver.play();
             win = 0, loose = 0;
             content.innerHTML = '<h1> SCORE: </h1> <h2>CPU: ' + loose + ' YOU: ' +win+ '</h2>';
             info.innerHTML = '';
             winner.innerHTML = '<h1>You win, congrats!</h1>'
        }
    }

    content.innerHTML = '<h1> SCORE: </h1> <h2>CPU: ' + loose + ' YOU: ' +win+ '</h2>';

    function playRound(playerSelection, computerSelection) {

        info.innerHTML = '<h2>Opponents hand: '+computerSelection+'</h2><h2>Your hand: '+playerSelection+'</h2>';

            if((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'scissors') || 
            (playerSelection == 'scissors' && computerSelection == 'rock')){
                loose++;
        return content.innerHTML = '<h1> SCORE: </h1> <h2>CPU: ' + loose + ' YOU: ' +win+ '</h2>';

        }else if((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || 
            (playerSelection == 'scissors' && computerSelection == 'paper')){
                win++;
        return content.innerHTML = '<h1> SCORE: </h1> <h2>CPU: ' + loose + ' YOU: ' +win+ '</h2>';

        }
    }
 
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const playerSelection = button.id;
        winner.innerHTML = '<h1>Choose your hand, get 5 points and win!</h1>'
        pick.play();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        reset();
    });
});

