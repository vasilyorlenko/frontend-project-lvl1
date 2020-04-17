import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getEvenGameData = () => {
  const randNum = getRandomIntegerFromRange(1, 99);
  const question = randNum.toString();
  const answer = isEven(randNum) ? 'yes' : 'no';
  return { question, answer };
};

const beginEvenGame = () => startGameEngine(description, getEvenGameData);

export default beginEvenGame;
