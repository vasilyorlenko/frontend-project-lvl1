import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getCorrectAnswer = (currentValue) => (isEven(currentValue) ? 'yes' : 'no');

const evenGameData = [initialMessage, getRandomIntegerFromRange, getCorrectAnswer];

const beginEvenGame = () => startGameEngine(evenGameData);

export default beginEvenGame;
