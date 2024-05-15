// Function for all games, the task is to generate and give randomized integers
const getRandomNumber = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

/* Function for brain-calc game, the function problem is to give
randomly one of the three digits of `+` , `-` или `*`      */
const getRandomSign = () => {
  const arrSign = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * arrSign.length);
  return arrSign[randomIndex];
};

// Function for brain-gcd game, function to find the greatest common divisor
const getGcd = (firstNumber, secondNumber) => {
  const smallerNumber = Math.min(firstNumber, secondNumber);

  for (let i = smallerNumber; i >= 1; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      return i;
    }
  }
  return 1;
};

/* Function for brain-progression game, function to create array with
  defined sart element, with certain step and length, all
  three parameters are defined by function getRandomNumber() */
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

export {
  getRandomNumber, getRandomSign, getGcd, getProgression,
};
