// Lets start


/*----- constants -----*/

const spinSound = new Audio('sounds/spin.mp3');
const unluckySound = new Audio('sounds/lose.mp3');
const casinoSound = new Audio('sounds/casino.wav');

// casinoSound.loop = true;
// casinoSound.play();

const randMin = 1;
const randMax = 3;
const gamePlayTimeOut = 40;

/*----- app's state (variables) -----*/

let credit, result;
let bet = 0;
let credits = 100;
let spinCounter = 0;

/*----- cached element references -----*/

const dgt0 = document.querySelector('#digit0');
const dgt1 = document.querySelector('#digit1');
const dgt2 = document.querySelector('#digit2');
const totalBet = document.querySelector('#totalBet');
const totalCredit = document.querySelector('#totalCredit');
const playAgain = document.getElementById('playAgn');
const betButton = document.getElementById('betBtn');
const spinButton = document.getElementById('spinBtn');
const stopButton = document.getElementById('stopBtn');

/*----- event listeners -----*/

betButton.addEventListener('click', addBet);
spinButton.addEventListener('click', render);
stopButton.addEventListener('click', stop);
playAgain.addEventListener('click', init);

/*----- functions -----*/

function checkTheWinner(){

        if((dgt0.innerHTML === dgt1.innerHTML) && (dgt1.innerHTML === dgt2.innerHTML) ){ gameMes ('Hay masallah!'); }
        else if((dgt0.innerHTML === dgt1.innerHTML)){ gameMes ('Hay masallah 2!'); }
        else if((dgt1.innerHTML === dgt2.innerHTML)){ gameMes ('Hay masallah 3!'); }
        else { gameMes ('Bi daha dene!'); }
       


}

function addBet () {
     
    if(credits > 0){
        bet = bet + 10;
        totalBet.textContent = bet;
        credits = credits - 10;
        totalCredit.textContent = credits;
        } else if( credits <= 0 ){ gameMes ('You lost all your clothes! Game over');
                                   playAgain.style.visibility = 'visible';
                                   betButton.disabled = true;
                                   spinButton.disabled = true;
                                   stopButton.disabled = true;
                                    }

       
}


function init() {
    credits = 100;
    bet = 0;
    totalBet.textContent = 0;
    totalCredit.textContent = 100;
    playAgain.style.visibility = 'hidden';
    betButton.disabled = false;
    spinButton.disabled = false;
    stopButton.disabled = false;
    dgt0.innerHTML = '<img src="imgs/GA.png">';
    dgt1.innerHTML = '<img src="imgs/GA.png">';
    dgt2.innerHTML = '<img src="imgs/GA.png">';
    gameMes ('This is a new adventure for you!');
  }



  function gamePlay(){

   

    let dig0 = randomInt(randMin, randMax);
    dgt0.innerHTML = '<img width="80" height="90" src="imgs/' + dig0 + '.png">';
    let dig1 = randomInt(randMin, randMax);
    dgt1.innerHTML = '<img width="80" height="90" src="imgs/' + dig1 + '.png">';
    let dig2 = randomInt(randMin, randMax);
    dgt2.innerHTML = '<img width="80" height="90" src="imgs/' + dig2 + '.png">';
    spinCounter = spinCounter + 1;        
    if(spinCounter<40){
     setTimeout(gamePlay,gamePlayTimeOut); 
    }

    spinSound.play();
    
    if(spinCounter === 40){ checkTheWinner(); }
  }

    
    function render(){
        casinoSound.pause();
        spinCounter = 0;
        gamePlay();
    }

    function stop(){
        spinCounter = 40;
        gamePlay();
    }



function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

function gameMes(msg){
    document.querySelector('#infoBox').textContent = msg;
}
