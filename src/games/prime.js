import generalLogic from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const arrPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  const number = getRandomNumber(1, 30);
  const answer = arrPrimeNumbers.includes(number) ? 'yes' : 'no';
  const question = number;
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
