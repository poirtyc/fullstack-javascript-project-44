import getRandomNumber from '../utils.js';
import generalLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isPrime(question)? 'yes': 'no';
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
