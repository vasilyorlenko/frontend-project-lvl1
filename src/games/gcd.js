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
  const randNumA = getRandomIntegerFromRange(1, 99);
  const randNumB = getRandomIntegerFromRange(1, 99);
  return {
    question: `${randNumA} ${randNumB}`,
    answer: getGreatestCommonDivisor(randNumA, randNumB)
      .toString(),
  };
};

const beginGcdGame = () => startGameEngine(description, getGcdGameData);

export default beginGcdGame;
