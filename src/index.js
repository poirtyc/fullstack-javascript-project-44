import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const generalLogic = (rules, generateRound) => {
  const playerName = makeWelcome();
  console.log(rules);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export default generalLogic;
