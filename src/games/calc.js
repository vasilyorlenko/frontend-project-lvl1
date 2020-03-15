import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomExpression = () => {
  const operator = operators[getRandomIntegerFromRange(0, 2)];
  const a = getRandomIntegerFromRange(1, 99);
  const b = getRandomIntegerFromRange(1, 99);

  return `${a} ${operator} ${b}`;
};

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getCorrectAnswer = (currentValue) => {
  const [a, operator, b] = currentValue.split(' ');

  return operations[operator](Number(a), Number(b));
};

const calcGameData = [description, getRandomExpression, getCorrectAnswer];

const beginCalcGame = () => startGameEngine(calcGameData);

export default beginCalcGame;
