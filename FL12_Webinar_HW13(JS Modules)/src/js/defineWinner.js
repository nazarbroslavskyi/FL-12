import { playerOne, playerTwo } from './constants';
import { listener } from './game';

const defineWinner = (firstPlayer, secondPlayer, step) => {
  let winner = '';
  const board = document.getElementsByClassName('board')[0];
  const squares = document.getElementsByClassName('board__square');
  if (
    squares[0].innerHTML === 'x' &&
    squares[1].innerHTML === 'x' &&
    squares[2].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[3].innerHTML === 'x' &&
    squares[4].innerHTML === 'x' &&
    squares[5].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[6].innerHTML === 'x' &&
    squares[7].innerHTML === 'x' &&
    squares[8].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[0].innerHTML === 'x' &&
    squares[3].innerHTML === 'x' &&
    squares[6].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[1].innerHTML === 'x' &&
    squares[4].innerHTML === 'x' &&
    squares[7].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[2].innerHTML === 'x' &&
    squares[5].innerHTML === 'x' &&
    squares[8].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[0].innerHTML === 'x' &&
    squares[4].innerHTML === 'x' &&
    squares[8].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[2].innerHTML === 'x' &&
    squares[4].innerHTML === 'x' &&
    squares[6].innerHTML === 'x'
  ) {
    if (firstPlayer === 'x') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[0].innerHTML === 'o' &&
    squares[1].innerHTML === 'o' &&
    squares[2].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[3].innerHTML === 'o' &&
    squares[4].innerHTML === 'o' &&
    squares[5].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[6].innerHTML === 'o' &&
    squares[7].innerHTML === 'o' &&
    squares[8].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[0].innerHTML === 'o' &&
    squares[3].innerHTML === 'o' &&
    squares[6].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[1].innerHTML === 'o' &&
    squares[4].innerHTML === 'o' &&
    squares[7].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[2].innerHTML === 'o' &&
    squares[5].innerHTML === 'o' &&
    squares[8].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[0].innerHTML === 'o' &&
    squares[4].innerHTML === 'o' &&
    squares[8].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (
    squares[2].innerHTML === 'o' &&
    squares[4].innerHTML === 'o' &&
    squares[6].innerHTML === 'o'
  ) {
    if (firstPlayer === 'o') {
      playerOne.wins++;
      winner = 'Player 1';
    } else {
      playerTwo.wins++;
      winner = 'Player 2';
    }
    board.removeEventListener('click', listener);
    alert(`${winner} won!`);
  } else if (step === 10) {
    playerOne.wins++;
    playerTwo.wins++;
    board.removeEventListener('click', listener);
    alert('Draw !');
  }

  document.getElementsByClassName(
    'playerOneScore'
  )[0].innerHTML = `Score ${playerOne.wins}`;
  document.getElementsByClassName(
    'playerTwoScore'
  )[0].innerHTML = `Score ${playerTwo.wins}`;

  if (
    document.getElementsByClassName('playerOne')[0].classList.contains('active')
  ) {
    document.getElementsByClassName('playerOne')[0].classList.remove('active');
    document.getElementsByClassName('playerTwo')[0].classList.add('active');
  } else {
    document.getElementsByClassName('playerTwo')[0].classList.remove('active');
    document.getElementsByClassName('playerOne')[0].classList.add('active');
  }
};

export default defineWinner;
