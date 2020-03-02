import readlineSync from 'readline-sync';
import askName from './index.js';

const getRandomNumber = () => {
  const min = 1;
  const max = 99;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};
const isEven = (number) => number % 2 === 0;
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const isCorrect = (answer, number) => answer === getCorrectAnswer(number);

const brainEven = () => {
  const name = askName();
  console.log('\nAnswer "yes" if the number is even, otherwise answer "no".');
  const poseAQuestion = (count = 0) => {
    if (count > 2) {
      console.log(`\nCongratulations, ${name}!`);
      return true;
    }

    const number = getRandomNumber();
    const answer = readlineSync.question(`\nQuestion: ${number}\nYour answer: `);
    const correctAnswer = getCorrectAnswer(number);

    if (!isCorrect(answer, number)) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return false;
    }

    return poseAQuestion(count + 1);
  };

  return poseAQuestion();
};

export default brainEven;
