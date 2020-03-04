import startGameEngine, { getRandomIntegerFromRange } from '../index.js';

const initialMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomValue = () => getRandomIntegerFromRange(1, 99);

const getCorrectAnswer = (currentValue) => {
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

  return isPrime(currentValue) ? 'yes' : 'no';
};

const beginPrimeGame = () => {
  const primeGameData = { initialMessage, getRandomValue, getCorrectAnswer };

  startGameEngine(primeGameData);
};

export default beginPrimeGame;
