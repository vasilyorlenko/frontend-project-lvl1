import readlineSync from 'readline-sync';

const getPlayerName = () => {
  const playerName = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const getRandomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getAnswer = (currentValue) => readlineSync.question(`\nQuestion: ${currentValue}\nYour answer: `);

const gameEngine = (gameData) => {
  const { initialMessage, getRandomValue, getCorrectAnswer } = gameData;
  const playerName = getPlayerName();

  console.log(`\n${initialMessage}`);

  const startNewRound = (count = 0) => {
    if (count > 2) {
      console.log(`\nCongratulations, ${playerName}!`);
      return true;
    }

    const currentValue = getRandomValue();
    const currentAnswer = getAnswer(currentValue);
    const correctAnswer = getCorrectAnswer(currentValue).toString();

    if (currentAnswer !== correctAnswer) {
      console.log(`\n"${currentAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
      return false;
    }

    return startNewRound(count + 1);
  };

  return startNewRound();
};

export {
  gameEngine as default,
  getPlayerName,
  getRandomIntegerFromRange,
};
