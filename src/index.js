import readlineSync from 'readline-sync';

const getRandomIntegerFromRange = (min = 1, max = 99) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const poseAQuestionAndGetAnAnswer = (question, defaultAnswer = '') => readlineSync.question(question, {
  defaultInput: defaultAnswer,
});

const startGameEngine = (gameData) => {
  const [initialMessage, getRandomValue, getCorrectAnswer] = gameData;

  const playerName = poseAQuestionAndGetAnAnswer('May I have your name? ', 'anonymous');

  console.log(`Hello, ${playerName}!`);
  console.log(initialMessage);

  const startNewRound = (count = 0) => {
    if (count > 2) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }

    const currentValue = getRandomValue();

    console.log(`Question: ${currentValue}`);

    const currentAnswer = poseAQuestionAndGetAnAnswer('Your answer: ');
    const correctAnswer = getCorrectAnswer(currentValue).toString();

    if (currentAnswer !== correctAnswer) {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }

    return startNewRound(count + 1);
  };

  return startNewRound();
};

export { startGameEngine as default, getRandomIntegerFromRange };
