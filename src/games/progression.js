import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'What number is missing in the progression?';

const getArithmeticProgression = (
  firstNumber,
  progressionStep,
  intendedLength = 10,
  progression = [firstNumber],
) => {
  if (progression.length > intendedLength - 1) {
    return progression;
  }

  const lastIndex = progression.length - 1;
  const currentLastNumber = progression[lastIndex];

  return getArithmeticProgression(
    firstNumber,
    progressionStep,
    intendedLength,
    [...progression, currentLastNumber + progressionStep],
  );
};

const getRandomArithmeticProgression = () => {
  const firstNumber = getRandomIntegerFromRange();
  const progressionStep = getRandomIntegerFromRange();

  const progression = getArithmeticProgression(firstNumber, progressionStep);
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

const progressionGameData = [initialMessage, getRandomArithmeticProgression, getCorrectAnswer];

const beginProgressionGame = () => startGameEngine(progressionGameData);

export default beginProgressionGame;
