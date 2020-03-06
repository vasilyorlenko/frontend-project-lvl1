import readlineSync from 'readline-sync';

const getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const startGameEngine = (gameData) => {
  const { initialMessage, getRandomValue, getCorrectAnswer } = gameData;
  const playerName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${playerName}!\n${initialMessage}`);

  const startNewRound = (count = 0) => {
    if (count > 2) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }

    const currentValue = getRandomValue();
    const currentAnswer = readlineSync.question(`Question: ${currentValue}\nYour answer: `);
    const correctAnswer = getCorrectAnswer(currentValue).toString();

    if (currentAnswer !== correctAnswer) {
      console.log(`"${currentAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
      return false;
    }

    return startNewRound(count + 1);
  };

  return startNewRound();
};

export { startGameEngine as default, getRandomIntegerFromRange };
