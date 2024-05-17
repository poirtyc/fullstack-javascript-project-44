import generalLogic from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';

const getRandomSign = () => {
  const arrSign = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arrSign.length);
  return arrSign[randomIndex];
};

const calc = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Unknown operation: ${sign}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const sign = getRandomSign();
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = String(calc(firstNumber, secondNumber, sign));
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
