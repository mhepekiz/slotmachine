# Slot Machine


### Wireframe of the game

To reach game's wireframe [Please Click](https://imgur.com/wUdC8nA).


### Pseudocode

```
1) Define required constants
	- Bet
	- Player Credits
	
2) Define required variables used to track the state of the game
	- Result of the spin
	- Bet by player
	- Check player credits for next game

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
	- Messages (New game, win, lost, not enough credit, game over)
	- Visual things (Image paths etc)

4) Upon loading the app should:
	4.1) Initialize the state variables
	4.2) Render those values to the page
	4.3) Wait for the user to click a button. Player can't SPIN before adding BET

5) SPIN the slot machine, get random variables for result 

6) If player wins add coins to player's account otherwise wait for new coins

7) If player hasn't enough money disable buttons and show REPLAY button
```
