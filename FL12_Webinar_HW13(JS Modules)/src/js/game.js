import defineWinner from './defineWinner';
import { playerOne, playerTwo } from './constants';
import boardEventListener from './boardEventListener';

let listener;
const game = () => {
  const board = document.getElementsByClassName('board')[0];
  let firstPlayer = 'x';
  let secondPlayer = 'o';
  const firstTurn = Math.floor(Math.random() * 2) + 1;
  console.log(firstTurn);
  if (firstTurn === 2) {
    document.getElementsByClassName('playerTwo')[0].classList.remove('active');
    document.getElementsByClassName('playerOne')[0].classList.add('active');
    firstPlayer = 'o';
    secondPlayer = 'x';
  } else if (firstTurn === 1) {
    document.getElementsByClassName('playerOne')[0].classList.remove('active');
    document.getElementsByClassName('playerTwo')[0].classList.add('active');
    firstPlayer = 'x';
    secondPlayer = 'o';
  }

  listener = boardEventListener.bind(
    null,
    firstPlayer,
    secondPlayer,
    firstTurn
  );
  board.addEventListener('click', listener);
};

export { game, listener };
