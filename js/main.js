// Lets start


/*----- constants -----*/

const spinSound = new Audio("sounds/spin.mp3");
const unluckySound = new Audio("sounds/lose.mp3");

const randMin = 1;
const randMax = 10;
const gamePlayTimeOut = 40;




/*----- app's state (variables) -----*/

let credit, result;
let bet = 0;
let credits = 100;
const dgt0 = document.querySelector('#digit0');
const dgt1 = document.querySelector('#digit1');
const dgt2 = document.querySelector('#digit2');

/*----- cached element references -----*/

const cashEls = {
    b: document.getElementById('b-bet'),
    c: document.getElementById('c-credit'),
    d: document.getElementById('betBtn'),
    e: document.getElementById('spinBtn'),
    f: document.getElementById('stopBtn'),
    g: document.getElementById('playAgn')
}



/*----- event listeners -----*/

cashEls.d.addEventListener('click', addBet);
cashEls.e.addEventListener('click', render);
cashEls.f.addEventListener('click', stop);
cashEls.g.addEventListener('click', init);


/*----- functions -----*/

function checkTheWinner(){

        if( dgt0.innerHTML === dgt1.innerHTML ){ gameMes ('Not much unlucky!'); }

}

function addBet () {
     
    if(credits > 0){
        bet = bet + 10;
        document.querySelector('#totalBet').textContent = bet;
        credits = credits - 10;
        document.querySelector('#totalCredit').textContent = credits;
        } else if( credits <= 0 ){ gameMes ('You lost all your clothes! Game over');
                                   document.getElementById('playAgn').style.visibility = 'visible';
                                   document.getElementById('betBtn').disabled = true;
                                   document.getElementById('spinBtn').disabled = true;
                                   document.getElementById('stopBtn').disabled = true;
                                    }

       
}


function init() {
    credits = 100;
    bet = 0;
    document.querySelector('#totalBet').textContent = 0;
    document.querySelector('#totalCredit').textContent = 100;
    document.getElementById('playAgn').style.visibility = 'hidden';
    document.getElementById('betBtn').disabled = false;
    document.getElementById('spinBtn').disabled = false;
    document.getElementById('stopBtn').disabled = false;
    gameMes ('This is a new adventure for you!');
  }


  function gamePlay(){
    
        let dig0 = randomInt(randMin, randMax);
        dgt0.innerHTML = '<img src="imgs/' + dig0 + '.png">';
        let dig1 = randomInt(randMin, randMax);
        dgt1.innerHTML = '<img src="imgs/' + dig1 + '.png">';
        let dig2 = randomInt(randMin, randMax);
        dgt2.innerHTML = '<img src="imgs/' + dig2 + '.png">';
        spinCounter = spinCounter + 1;        
        if(spinCounter<40){
         setTimeout(gamePlay,gamePlayTimeOut); 
        }

        spinSound.play();
        
        if(spinCounter === 40){ checkTheWinner(); }


    }

    function render(){
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
