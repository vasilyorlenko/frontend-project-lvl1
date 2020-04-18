import readlineSync from 'readline-sync';

const startGameEngine = (description, getGameData) => {
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

    const { question, answer } = getGameData();

    console.log(`Question: ${question}`);

    const playersAnswer = readlineSync.question('Your answer: ');

    if (playersAnswer !== answer) {
      console.log(`"${playersAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }

    console.log('Correct!');

    return startNewRound(count + 1);
  };

  return startNewRound();
};

export default startGameEngine;
