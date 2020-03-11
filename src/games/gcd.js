import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'Find the greatest common divisor of given numbers.';

const getRandomPairOfNumbers = () => {
  const a = getRandomIntegerFromRange();
  const b = getRandomIntegerFromRange();

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

const gcdGameData = [initialMessage, getRandomPairOfNumbers, getCorrectAnswer];

const beginGcdGame = () => startGameEngine(gcdGameData);

export default beginGcdGame;
