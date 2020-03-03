import gameEngine, { getRandomIntegerFromRange } from '../index.js';

const calcGame = () => {
  const initialMessage = 'What is the result of the expression?';

  const getRandomValue = () => {
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomIntegerFromRange(0, 2)];
    const a = getRandomIntegerFromRange(1, 99);
    const b = getRandomIntegerFromRange(1, 99);

    return `${a} ${operator} ${b}`;
  };

  const getCorrectAnswer = (currentValue) => {
    const internal = currentValue.split(' ');
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };
    const operator = internal[1];
    const a = Number(internal[0]);
    const b = Number(internal[2]);

    return operations[operator](a, b);
  };

  const calcGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  gameEngine(calcGameData);
};

export default calcGame;
