import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getEvenGameData = () => {
  const randNum = getRandomIntegerFromRange(1, 99);
  return {
    question: randNum.toString(),
    answer: isEven(randNum) ? 'yes' : 'no',
  };
};

const beginEvenGame = () => startGameEngine(description, getEvenGameData);

export default beginEvenGame;
