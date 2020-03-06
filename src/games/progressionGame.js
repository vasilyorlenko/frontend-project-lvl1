import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'What number is missing in the progression?';

const getRandomArithmeticProgression = () => {
  const firstNumber = getRandomIntegerFromRange(1, 99);
  const progressionStep = getRandomIntegerFromRange(1, 99);

  const iter = (progression = [firstNumber]) => {
    if (progression.length > 9) {
      return progression;
    }

    const lastIndex = progression.length - 1;
    const currentLastNumber = progression[lastIndex];

    return iter([...progression, currentLastNumber + progressionStep]);
  };

  return iter();
};

const getRandomValue = () => {
  const progression = getRandomArithmeticProgression();
  const numberToMask = progression[getRandomIntegerFromRange(0, 9)];

  return progression
    .map((number) => (number === numberToMask ? '..' : number.toString()))
    .join(' ');
};

const getProgressionStep = (progression, i = 0, j = 1) => {
  if (progression[i] !== '..' && progression[j] !== '..') {
    return progression[j] - progression[i];
  }

  return getProgressionStep(progression, i + 2, j + 2);
};

const getCorrectAnswer = (currentValue) => {
  const progression = currentValue
    .split(' ')
    .map((element) => (element !== '..' ? Number(element) : '..'));

  const progressionStep = getProgressionStep(progression);
  const placeholderIndex = progression.findIndex((element) => element === '..');

  const missingNumber = placeholderIndex === 0
    ? progression[placeholderIndex + 1] - progressionStep
    : progression[placeholderIndex - 1] + progressionStep;

  return missingNumber;
};

const beginProgressionGame = () => {
  const progressionGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  startGameEngine(progressionGameData);
};

export default beginProgressionGame;
