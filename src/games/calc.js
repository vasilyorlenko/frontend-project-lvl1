import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const getRandomExpression = () => {
  const operator = operators[getRandomIntegerFromRange(0, 2)];
  const a = getRandomIntegerFromRange();
  const b = getRandomIntegerFromRange();

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

const calcGameData = [initialMessage, getRandomExpression, getCorrectAnswer];

const beginCalcGame = () => startGameEngine(calcGameData);

export default beginCalcGame;
