// Lets start


/*----- constants -----*/

const SPINSOUND = new Audio('sounds/spin.mp3');
const CASINOSOUND = new Audio('sounds/casino.wav');
const PAYOUTSOUND = new Audio('sounds/payout.wav');
const ADDBETSOUND = new Audio('sounds/coin.mp3');
const GAMEOVERSOUND = new Audio('sounds/gameover.wav');

const RANDMIN = 1;
const RANDMAX = 10;
const GAMEPLAYTIMEOUT = 40;

/*----- app's state (variables) -----*/

let credit, result;
let bet = 0;
let credits = 100;
let spinCounter = 0;

/*----- cached element references -----*/

let digit0 = document.querySelector('#digit0');
let digit1 = document.querySelector('#digit1');
let digit2 = document.querySelector('#digit2');
let totalBet = document.querySelector('#betAmount');
let totalCredit = document.querySelector('#creditAmount');
let totalCreditP = document.querySelector('#totalCredit');
let playAgain = document.getElementById('playAgn');
let betButton = document.getElementById('betBtn');
let spinButton = document.getElementById('spinBtn');
let resetButton = document.getElementById('resetBtn');
let checkArray = [];

/*----- event listeners -----*/

betButton.addEventListener('click', addBet);
spinButton.addEventListener('click', render);
resetButton.addEventListener('click', init);
playAgain.addEventListener('click', init);

/*----- functions -----*/

// Check winner function. Collecting variables from Array and checking with if statement
// If player catch 2 same digits wins 2xBet
// If player catch 3 same digits wins 3xBet
// If player catch 3 same digits but 3 Coronavirus won the game but died --- GAME OverconstrainedError

function checkTheWinner(){

        if((checkArray[0] === checkArray[1]) && (checkArray[1] === checkArray[2]) && ( checkArray[0] !== 4)){ { 
            gameMes ('Wohooo. I can\'t believe to my CPU! BETx3'); 
            credits = credits + (bet *3); 
            totalCredit.textContent = credits; 
            bet = 0; 
            totalBet.textContent = bet; 
            PAYOUTSOUND.play(); 
         } }
        else if((checkArray[0] === checkArray[1]) && (checkArray[1] === checkArray[2]) && ( checkArray[0] === 4)){ { 
            gameMes ('Sad news! You won BETx3 but lost your life with 3 CORONAVIRUS'); 
            credits = credits + (bet *3); 
            totalCredit.textContent = credits; 
            bet = 0; 
            totalBet.textContent = bet; 
            PAYOUTSOUND.play();} 
            betButton.disabled = true;
            spinButton.disabled = true;
            playAgain.style.visibility = 'visible';
            totalCreditP.style.visibility = 'hidden';
            GAMEOVERSOUND.play();
        }
        else if((checkArray[0] === checkArray[1]) || (checkArray[1] === checkArray[2])){ 
            gameMes ('Lucky guy! You find 2 same and won BETx2'); 
            credits = credits + (bet *2); 
            totalCredit.textContent = credits; 
            bet = 0; 
            totalBet.textContent = bet; 
            PAYOUTSOUND.play();}
        else { gameMes ('You lost! Add bet to try again!'); 
            bet = 0; 
            totalBet.textContent = bet;  }
            checkArray = [];
}

// Player has 100 credit at the begining and can BET 10 once
// Function working with eventListener every click back with ADDBETSOUND 
// If player still has more than 10 credits can BET to play
// And adding 10 credit to BET basket
// If all credits lost a game over message appears

function addBet () {
     
    if(credits > 0){
        ADDBETSOUND.play();
        bet = bet + 10;
        spinButton.disabled = false;
        totalBet.textContent = bet;
        credits = credits - 10;
        totalCredit.textContent = credits;
        } else if( (credits <= 0) && (bet === 0) ){ 
                                   ADDBETSOUND.play();
                                   gameMes ('You lost all your money and clothes! Game over');
                                   playAgain.style.visibility = 'visible';
                                   totalCreditP.style.visibility = 'hidden';
                                   betButton.disabled = true;
                                   spinButton.disabled = true;
                                   GAMEOVERSOUND.play();
                                    }
}

// Init function reset all values of the game to the beginning
// Give player new 100 credits to play
// Changing slot machine digits to GA IntersectionObserver

function init() {
    credits = 100;
    bet = 0;
    checkArray = [];
    totalBet.textContent = 0;
    totalCredit.textContent = 100;
    playAgain.style.visibility = 'hidden';
    totalCreditP.style.visibility = 'visible';
    betButton.disabled = false;
    spinButton.disabled = false;
    digit0.innerHTML = '<img src="imgs/GA.png">';
    digit1.innerHTML = '<img src="imgs/GA.png">';
    digit2.innerHTML = '<img src="imgs/GA.png">';
    gameMes ('Are you lucky or unlucky? Dare?');
  }

// gamePlay function the main function of the game getting 3 different random numbers between RANDMIN and RANDMAX
// To easy development I used icon names as numbers and each number means an icon
// Slot machine suffle the digits more than 1 time with a timeout and show the random selected icons 
// Adding selected numbers to checkArray to use in checkTheWinner function
// Playing reel sound 

  function gamePlay(){
    
    if( bet === 0 ){ spinButton.disabled = true; } else {
    let random0 = randomInt(RANDMIN, RANDMAX);
    let random1 = randomInt(RANDMIN, RANDMAX);
    let random2 = randomInt(RANDMIN, RANDMAX);

    digit0.innerHTML = '<img width="80" height="90" src="imgs/' + random0 + '.png">';
    digit1.innerHTML = '<img width="80" height="90" src="imgs/' + random1 + '.png">';
    digit2.innerHTML = '<img width="80" height="90" src="imgs/' + random2 + '.png">';
    spinCounter = spinCounter + 1;        
    
    if(spinCounter<40){

     checkArray = [];   
     setTimeout(gamePlay,GAMEPLAYTIMEOUT); 
    }     
    SPINSOUND.play();

    if(spinCounter === 40){ 
        checkArray.push(random0);
        checkArray.push(random1);
        checkArray.push(random2);
        checkTheWinner(); }
  }
  }

// Prepare spin counter for reel and kick the machine

    function render(){
        spinCounter = 0;
        gamePlay();
    }

// Random number function

function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

// Show message function

function gameMes(msg){
    document.querySelector('#infoBox').textContent = msg;
}
