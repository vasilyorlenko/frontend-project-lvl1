import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreatestCommonDivisor(b, a % b);
};

const getGcdGameData = () => {
  const a = getRandomIntegerFromRange(1, 99);
  const b = getRandomIntegerFromRange(1, 99);
  const question = `${a} ${b}`;
  const answer = getGreatestCommonDivisor(a, b).toString();
  return { question, answer };
};

const beginGcdGame = () => startGameEngine(description, getGcdGameData);

export default beginGcdGame;
