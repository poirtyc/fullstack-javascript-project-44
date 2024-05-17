import generalLogic from '../index.js';
import { getRandomNumber } from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const startValue = getRandomNumber(1, 5);
  const difference = getRandomNumber(1, 4);
  const length = getRandomNumber(5, 10);
  const arrProgression = [];
  for (let i = startValue; arrProgression.length <= length; i += difference) {
    arrProgression.push(i);
  }
  return arrProgression;
};

const generateRound = () => {
  const expression = getProgression();

  const randomIndex = getRandomNumber(0, expression.length - 1);
  const hiddenValue = expression[randomIndex];
  expression[randomIndex] = '..';

  const question = `${expression}`;
  const answer = String(hiddenValue);
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
