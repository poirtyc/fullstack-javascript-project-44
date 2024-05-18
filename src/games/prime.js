import getRandomNumber from '../utils.js';
import generalLogic from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (num) => {
  if (num <= 1) return 'no';
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const num = getRandomNumber(1, 100);
  const answer = getPrime(num);
  const question = num;
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
