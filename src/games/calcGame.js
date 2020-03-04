import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'What is the result of the expression?';

const getRandomValue = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomIntegerFromRange(0, 2)];
  const a = getRandomIntegerFromRange(1, 99);
  const b = getRandomIntegerFromRange(1, 99);

  return `${a} ${operator} ${b}`;
};

const getCorrectAnswer = (currentValue) => {
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  const [a, operator, b] = currentValue.split(' ');

  return operations[operator](Number(a), Number(b));
};

const beginCalcGame = () => {
  const calcGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  startGameEngine(calcGameData);
};

export default beginCalcGame;
