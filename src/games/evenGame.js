import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomValue = () => getRandomIntegerFromRange(1, 99);

const getCorrectAnswer = (currentValue) => {
  const isEven = (n) => n % 2 === 0;

  return isEven(currentValue) ? 'yes' : 'no';
};

const beginEvenGame = () => {
  const evenGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  startGameEngine(evenGameData);
};

export default beginEvenGame;
