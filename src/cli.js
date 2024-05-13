import readlineSync from 'readline-sync';

// Function for all games, task function get user name and welcome
const makeWelcome = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
  };

  export {makeWelcome};