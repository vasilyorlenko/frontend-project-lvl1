import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRandomPairOfNumbers = () => {
  const a = getRandomIntegerFromRange(1, 99);
  const b = getRandomIntegerFromRange(1, 99);

  return `${a} ${b}`;
};

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreatestCommonDivisor(b, a % b);
};

const getCorrectAnswer = (currentValue) => {
  const [a, b] = currentValue.split(' ');

  return getGreatestCommonDivisor(Number(a), Number(b));
};

const gcdGameData = [description, getRandomPairOfNumbers, getCorrectAnswer];

const beginGcdGame = () => startGameEngine(gcdGameData);

export default beginGcdGame;
