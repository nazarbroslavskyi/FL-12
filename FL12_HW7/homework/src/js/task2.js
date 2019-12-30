let game = confirm(`Do you want to play a game?`);
let randCoef = 9;
let initRandCoef = 9;
let increase = 4;
let totalPrize = 0;
let prize = 100;
let initialPrize = 100;
let initialAttempts = 3;
let two = 2;
let randomNumber;
let i = initialAttempts;

if(!game) {
    alert(`You did not become a billionaire, but can.`)
} else {
    while(game) {
    randomNumber = Math.floor(Math.random() * randCoef);
    let numberOfUser = +prompt(`Choose a roulette pocket number from 0 to ${randCoef - 1}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prize}$`, '0');
        if(numberOfUser === randomNumber) {
            totalPrize += prize;
            let continueGame = confirm(`Congratulation, you won! Your prize is: ${prize}$. 
 Do you want to continue?`);
            if(continueGame) {
                randCoef += increase;
                prize *= two;
                i = initialAttempts;
                continue;
            } else if(!continueGame) {
               let playAgain = confirm(`Thank you for your participation. 
 Your prize is: ${totalPrize}$ Do you want to play again ?`);
                i = initialAttempts;
               if(!playAgain) {
                   game = false;
               }
               continue;
            }
        } else if(numberOfUser !== randomNumber && i !== 1) {
            prize /= two;
        } else if(numberOfUser !== randomNumber && i === 1) {
            prize = 0;
          game = confirm(`Thank you for your participation. Your prize is: ${totalPrize}$.
Do you want to play again ?`);
        prize = initialPrize;
        totalPrize = 0;
        randCoef = initRandCoef;
        i = initialAttempts;
        continue;
        }
        if(i === 1){
            break;
        }
        i--;
    }
}