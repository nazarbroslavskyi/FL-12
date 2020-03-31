import { options } from './constants';
import { game } from './game';
import { listener } from './game';

export default function newGame() {
  const board = document.getElementsByClassName('board')[0];
  const newgame = document.getElementsByClassName('newGame')[0];
  let squares = document.getElementsByClassName('board__square');
  newgame.addEventListener('click', function() {
    options.step = 1;
    board.removeEventListener('click', listener);
    game();
    squares = [...squares];
    squares.forEach(element => {
      element.innerHTML = '';
    });
  });
}
