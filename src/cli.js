import readlineSync from 'readline-sync';
import {getRandomNumber, getRandomSign, getGcd, getProgression} from './utils.js'

// Function for all games, task function get user name and welcome
const makeWelcome = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Task function depending on the received game type from index.js ask the user a question
const showQuestion = (typeGame) => {
  if (typeGame === 'brain-even' || typeGame === 'brain-prime') {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  if (typeGame === 'brain-calc') {
    console.log('What is the result of the expression?');
  }
  if (typeGame === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  }

  if (typeGame === 'brain-progression') {
    console.log('What number is missing in the progression?');
  }
};

// Function task to get a response from user
const getAnswerFromUser = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

/* Function for all games, the function task of showing the user and give
values or expressions to the question depending on the type of game */
const getAndShowValueQuestion = (typeGame) => {
  if (typeGame === 'brain-even' || typeGame === 'brain-prime') {
    const valueGetRandom = getRandomNumber();
    console.log(`Question: ${valueGetRandom}`);
    return valueGetRandom;
  }

  if (typeGame === 'brain-calc') {
    const randomMathExpression = `${getRandomNumber()} ${getRandomSign()} ${getRandomNumber()}`;
    console.log(`Question: ${randomMathExpression}`);
    return randomMathExpression;
  }

  if (typeGame === 'brain-gcd') {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    return [firstNumber, secondNumber];
  }

  if (typeGame === 'brain-progression'){
    const progression = getProgression();
    let randomIndex = getRandomNumber(0, progression.length - 1); // Получаем случайный индекс в диапазоне от 0 до длины массива - 1
    const hiddenValue = progression[randomIndex]
    progression[randomIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    return hiddenValue;
  }
};


/* The function for all games, the task of the function to give the right answer,
the values get from the index.js, and the index.js from getAndShowValueQuestion() */
const getTrueAnswer = (typeGame, randomValueOrExpression) => {
  if (typeGame === 'brain-even') {
    const value = randomValueOrExpression;
    return value % 2 === 0 ? 'yes' : 'no';
  }

  if (typeGame === 'brain-calc') {
    return eval(randomValueOrExpression).toString();
  }

  if (typeGame === 'brain-gcd') {
    const [firstNumber, secondNumber] = randomValueOrExpression;
    return getGcd(firstNumber, secondNumber).toString();
  }

  if (typeGame === 'brain-progression') {
    let hiddenValue = randomValueOrExpression;
    return hiddenValue.toString();
  }

  if (typeGame === 'brain-prime') {
    let randomNumber = randomValueOrExpression;
    let arrPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    let result = arrPrimeNumbers.includes(randomNumber);
    return result === false? 'no': 'yes';
  }
};

// Function for all games, the task is to give 'Correct'
const showCorrect = () => {
  console.log('Correct!');
};

/* Feature for all games, the task is to get the wrong
and right answer and string them in the right order */
const showIncorrect = (wrongValue, trueValue) => {
  console.log(`'${wrongValue}' is a wrong answer ;(. Correct answer was '${trueValue}'`);
};

/* Function for all games, task get a name from index.js, and index.js
gets from getName function and give congratulations to the substituted name */
const showCongratulation = (name) => `Congratulations, ${name}!`;


export {
  makeWelcome, showQuestion, getAnswerFromUser, getTrueAnswer,
  showCorrect, showIncorrect, getAndShowValueQuestion, showCongratulation,
};
