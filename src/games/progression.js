import getRandomNumber from '../utils.js';
import generalLogic from '../index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (firstNum, difference, lengthProgression) => {
  const progression = [];
  for (let i = firstNum; progression.length <= lengthProgression; i += difference) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const firstNum = getRandomNumber(1, 5);
  const difference = getRandomNumber(1, 4);
  const lengthProgression = getRandomNumber(5, 10);
  const expression = getProgression(firstNum, difference, lengthProgression);
  const randomIndex = getRandomNumber(0, expression.length - 1);
  const answer = String(expression[randomIndex]);
  expression[randomIndex] = '..';
  const question = expression.join(' ');
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
