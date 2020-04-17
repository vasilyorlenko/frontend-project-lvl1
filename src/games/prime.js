import startGameEngine from '../index.js';
import getRandomIntegerFromRange from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const iter = (divisor = 2) => {
    if (number % divisor === 0 && number !== divisor) {
      return false;
    }
    if (divisor > (number / 2)) {
      return true;
    }

    return iter(divisor + 1);
  };

  return iter();
};

const getPrimeGameData = () => {
  const randNum = getRandomIntegerFromRange(1, 99);
  const question = randNum.toString();
  const answer = isPrime(randNum) ? 'yes' : 'no';
  return { question, answer };
};

const beginPrimeGame = () => startGameEngine(description, getPrimeGameData);

export default beginPrimeGame;
