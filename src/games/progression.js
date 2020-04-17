import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNumber + i * progressionStep);
  }
  return progression;
};

const getProgressionGameData = () => {
  const firstNumber = getRandomIntegerFromRange(1, 99);
  const progressionStep = getRandomIntegerFromRange(1, 99);
  const progressionLength = 10;
  const progression = getArithmeticProgression(firstNumber, progressionStep, progressionLength);
  const indexOfANumberToMask = getRandomIntegerFromRange(0, progressionLength - 1);
  return {
    question: progression.map((num, i) => (i === indexOfANumberToMask ? '..' : num)).join(' '),
    answer: progression[indexOfANumberToMask].toString(),
  };
};

const beginProgressionGame = () => startGameEngine(description, getProgressionGameData);

export default beginProgressionGame;
