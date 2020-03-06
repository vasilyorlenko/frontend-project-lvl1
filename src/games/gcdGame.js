import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'Find the greatest common divisor of given numbers.';

const getRandomValue = () => {
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

const beginGcdGame = () => {
  const gcdGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  startGameEngine(gcdGameData);
};

export default beginGcdGame;
