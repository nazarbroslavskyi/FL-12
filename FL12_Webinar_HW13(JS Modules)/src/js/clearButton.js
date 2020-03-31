import { options, playerOne, playerTwo } from './constants';
import { game } from './game';
import { listener } from './game';

export default function clearButton() {
  const board = document.getElementsByClassName('board')[0];
  const newgame = document.getElementsByClassName('clearButton')[0];
  let squares = document.getElementsByClassName('board__square');

  newgame.addEventListener('click', function(event) {
    options.step = 1;
    playerTwo.wins = 0;
    playerOne.wins = 0;
    board.removeEventListener('click', listener);
    squares = [...squares];
    squares.forEach(element => {
      element.innerHTML = '';
    });
    document.getElementsByClassName(
      'playerOneScore'
    )[0].innerHTML = `Score ${playerOne.wins}`;
    document.getElementsByClassName(
      'playerTwoScore'
    )[0].innerHTML = `Score ${playerTwo.wins}`;
    game();
  });
}
