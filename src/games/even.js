import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const getCorrectAnswer = (currentValue) => (isEven(currentValue) ? 'yes' : 'no');

const evenGameData = [description, getRandomIntegerFromRange, getCorrectAnswer];

const beginEvenGame = () => startGameEngine(evenGameData);

export default beginEvenGame;
