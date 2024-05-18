import getRandomNumber from '../utils.js';
import generalLogic from '../index.js';

const rules = 'What is the result of the expression?';

const getOperator = () => {
  const arrOperator = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, arrOperator.length - 1);
  return arrOperator[randomIndex];
};

const getResult = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 10);
  const num2 = getRandomNumber(1, 10);
  const operator = String(getOperator());
  const question = `${num1} ${operator} ${num2}`;
  const answer = String(getResult(num1, num2, operator));
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
