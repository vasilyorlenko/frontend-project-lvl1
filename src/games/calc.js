import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getCalcGameData = () => {
  const a = getRandomIntegerFromRange(1, 99);
  const b = getRandomIntegerFromRange(1, 99);
  const i = getRandomIntegerFromRange(0, 2);
  const question = `${a} ${operators[i]} ${b}`;
  const answer = operations[operators[i]](a, b).toString();
  return { question, answer };
};

const beginCalcGame = () => startGameEngine(description, getCalcGameData);

export default beginCalcGame;
