import gameEngine, { getRandomIntegerFromRange } from '../index.js';

const evenGame = () => {
  const initialMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getRandomValue = () => getRandomIntegerFromRange(1, 99);

  const getCorrectAnswer = (currentValue) => {
    const isEven = (n) => n % 2 === 0;
    return isEven(currentValue) ? 'yes' : 'no';
  };

  const evenGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  gameEngine(evenGameData);
};

export default evenGame;
