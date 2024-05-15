import {
    makeWelcome, showQuestion, getAnswerFromUser, getTrueAnswer,
    showCorrect, showIncorrect, getAndShowValueQuestion, showCongratulation,
  } from './cli.js';
  
  export default function playGame(typeGame) {
    const playerName = makeWelcome();
    showQuestion(typeGame);
  
    let correctAnswersCount = 0;
    while (correctAnswersCount < 3) {
      const randomValueOrExpression = getAndShowValueQuestion(typeGame);
      const trueAnswer = getTrueAnswer(typeGame, randomValueOrExpression);
      const answerUser = getAnswerFromUser();
      if (trueAnswer === answerUser) {
        showCorrect();
      } else { //
        return showIncorrect(answerUser, trueAnswer, playerName);
      }
      correctAnswersCount += 1;
    }
    return console.log(showCongratulation(playerName));
  }