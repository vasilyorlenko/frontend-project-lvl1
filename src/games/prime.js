import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getPrimeGameData = () => {
  const randNum = getRandomIntegerFromRange(1, 99);
  return {
    question: randNum.toString(),
    answer: isPrime(randNum) ? 'yes' : 'no',
  };
};

const beginPrimeGame = () => startGameEngine(description, getPrimeGameData);

export default beginPrimeGame;
