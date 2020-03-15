import readlineSync from 'readline-sync';

const startGameEngine = (gameData) => {
  const [description, getRandomValue, getCorrectAnswer] = gameData;

  const playerName = readlineSync.question('May I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${playerName}!`);
  console.log(description);

  const startNewRound = (count = 0) => {
    if (count > 2) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }

    const currentValue = getRandomValue();

    console.log(`Question: ${currentValue}`);

    const currentAnswer = readlineSync.question('Your answer: ');
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

export default startGameEngine;
