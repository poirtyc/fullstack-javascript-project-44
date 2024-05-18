import getRandomNumber from '../utils.js';
import generalLogic from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const answer = String(getGcd(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
