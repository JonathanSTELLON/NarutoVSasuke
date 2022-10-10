let get = $_GET();

let playerOneName = getObjectValue(get, 'playerOneName', 'naruto');
let playerTwoName = getObjectValue(get, 'playerTwoName', 'sasuke');

let playerOneClass = getObjectValue(get, 'playerOne', 'naruto');
let playerTwoClass = getObjectValue(get, 'playerTwo', 'sasuke');

let mapClass = getObjectValue(get, 'map', 'streetFighter');
let mapBrioche = new map('scene', mapClass);

let player2 = new player(playerTwoName, 'player-two', playerOneClass, 5);
let player1 = new player(playerOneName, 'player-one', playerTwoClass, 5);

let winner = null;
let loser = null;
let playAgain = document.getElementById('play-again');

document.addEventListener('keyup', play);
document.addEventListener('click', refreshGame);

function play(e){
    let codeValid = false;
    if (e.code == 'KeyA'){
        codeValid = true;
        player2.dom.classList.add('playing');
        if (winner){
            return;
        }
        winner = player2;
        loser = player1;
    }
    else if (e.code == 'Semicolon'){
        codeValid = true;
        player1.dom.classList.add('playing');
        if (winner){
            return;
        }
        winner = player1;
        loser = player2;
    }
    if (!codeValid){
        return;
    }
    winner.dom.classList.add('winner');
    loser.life.damage();
    if(loser.life.isDead()){
        loser.dom.classList.add('loser');
        playAgain.classList.add('play-again-show');
    }
    else{
        loser.dom.classList.add('damaged');
        setTimeout(refresh, 500);
    }
    //playAgain.classList.add('play-again-show');
    //console.log(loser.life.current);
}

function refresh(){

    player1.dom.classList.remove('winner');
    player1.dom.classList.remove('loser');
    player1.dom.classList.remove('playing');
    player1.dom.classList.remove('damaged');
    
    player2.dom.classList.remove('winner');
    player2.dom.classList.remove('loser');
    player2.dom.classList.remove('playing');
    player2.dom.classList.remove('damaged');
    
    playAgain.classList.remove('play-again-show');

    winner = null;
    loser = null;
}

function refreshGame(){

    refresh();
    player1.life.initLife();
    player2.life.initLife();

}