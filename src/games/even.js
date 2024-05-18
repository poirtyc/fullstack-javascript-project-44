import getRandomNumber from '../utils.js';
import generalLogic from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  generalLogic(rules, generateRound);
};
