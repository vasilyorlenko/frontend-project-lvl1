import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const operations = {
  '+': (numA, numB) => numA + numB,
  '-': (numA, numB) => numA - numB,
  '*': (numA, numB) => numA * numB,
};

const getCalcGameData = () => {
  const randNumA = getRandomIntegerFromRange(1, 99);
  const randNumB = getRandomIntegerFromRange(1, 99);
  const randIndex = getRandomIntegerFromRange(0, 2);
  return {
    question: `${randNumA} ${operators[randIndex]} ${randNumB}`,
    answer: operations[operators[randIndex]](randNumA, randNumB)
      .toString(),
  };
};

const beginCalcGame = () => startGameEngine(description, getCalcGameData);

export default beginCalcGame;
