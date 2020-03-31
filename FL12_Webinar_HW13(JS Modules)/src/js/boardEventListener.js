import defineWinner from './defineWinner';
import { options } from './constants';

export default function boardEventListener(
  firstPlayer,
  secondPlayer,
  firstTurn
) {
  if (
    event.target.className === 'board__square' &&
    event.target.innerHTML === ''
  ) {
    if (options.step % 2 !== 0) {
      event.target.innerHTML = firstTurn === 2 ? firstPlayer : secondPlayer;
    } else {
      event.target.innerHTML = firstTurn === 2 ? secondPlayer : firstPlayer;
    }
    setTimeout(() => defineWinner(firstPlayer, secondPlayer, options.step), 1); // added this because alert execute faster than innerHTML
    options.step++;
  }
}
