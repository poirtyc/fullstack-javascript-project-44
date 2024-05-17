import generalLogic from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(getGcd(firstNumber, secondNumber));
  console.log(answer);
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
