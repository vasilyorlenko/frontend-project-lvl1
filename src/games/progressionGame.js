import gameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'What number is missing in the progression?';

const getRandomValue = () => {
  const firstNumber = getRandomIntegerFromRange(1, 99);
  const progressionStep = getRandomIntegerFromRange(1, 99);

  const getRandomArithmeticProgression = (progression = [firstNumber]) => {
    if (progression.length > 9) {
      return progression;
    }

    const lastIndex = progression.length - 1;
    const currentLastNumber = progression[lastIndex];

    return getRandomArithmeticProgression([...progression, currentLastNumber + progressionStep]);
  };

  const progression = getRandomArithmeticProgression();
  const numberToMask = progression[getRandomIntegerFromRange(0, 9)];

  return progression
    .map((number) => (number === numberToMask ? '..' : number.toString()))
    .join(' ');
};

const getCorrectAnswer = (currentValue) => {
  const getProgressionStep = (progression, i = 0, j = 1) => {
    if (progression[i] !== '..' && progression[j] !== '..') {
      return progression[j] - progression[i];
    }

    return getProgressionStep(progression, i + 2, j + 2);
  };

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

const progressionGame = () => {
  const progressionGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  gameEngine(progressionGameData);
};

export default progressionGame;
