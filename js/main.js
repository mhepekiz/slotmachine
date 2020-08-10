// Lets start


/*----- constants -----*/

const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');
const slotMac = new Audio('http://soundbible.com/mp3/slot-machine-daniel_simon.mp3');



/*----- app's state (variables) -----*/

let credit, result;
let bet = 0;
let credits = 100;


/*----- cached element references -----*/

// const cashEls = {
//     b: document.getElementById('b-bet'),
//     c: document.getElementById('c-credit')
// }



/*----- event listeners -----*/

document.getElementById('betBtn').addEventListener('click', addBet);
document.getElementById('spinBtn').addEventListener('click', render);
document.getElementById('stopBtn').addEventListener('click', function(){ alert('Stop Button Clicked') });
document.getElementById('playAgn').addEventListener('click', init);


/*----- functions -----*/

function checkTheWinner(){

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
    document.querySelector('#digit0').textContent = 0;
    document.querySelector('#digit1').textContent = 0;
    document.querySelector('#digit2').textContent = 0;
    document.querySelector('#totalBet').textContent = 0;
    document.querySelector('#totalCredit').textContent = 100;
    document.getElementById('playAgn').style.visibility = 'hidden';
    document.getElementById('betBtn').disabled = false;
    document.getElementById('spinBtn').disabled = false;
    document.getElementById('stopBtn').disabled = false;
    gameMes ('This is a new adventure for you!');
  }

function spinNow(a,b) {

    for (var i = 0; i <= 10; i++) {
        (function(j) {
           setTimeout(function() {
            document.querySelector('#digit' + a).textContent = j; }, (b * j));
      })(i);
     }
    }

    function render() {
   
    spinNow(0, 80);
    spinNow(1, 50);
    spinNow(2, 110);

}
    
function gameMes(msg){
    document.querySelector('#infoBox').textContent = msg;
}
