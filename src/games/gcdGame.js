import gameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'Find the greatest common divisor of given numbers.';

const getRandomValue = () => {
  const a = getRandomIntegerFromRange(1, 99);
  const b = getRandomIntegerFromRange(1, 99);

  return `${a} ${b}`;
};

const getCorrectAnswer = (currentValue) => {
  const getGreatestCommonDivisor = (a, b) => {
    if (b === 0) {
      return a;
    }

    return getGreatestCommonDivisor(b, a % b);
  };

  const [a, b] = currentValue.split(' ');

  return getGreatestCommonDivisor(Number(a), Number(b));
};

const gcdGame = () => {
  const gcdGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  gameEngine(gcdGameData);
};

export default gcdGame;
