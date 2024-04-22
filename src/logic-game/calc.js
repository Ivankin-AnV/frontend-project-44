import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const questionAnswer = () => {
  const firstNumber = getRandomNumber(1, 10);
  const secondNumber = getRandomNumber(1, 10);
  const operation = getRandomNumber(1, 3);
  if (operation === 3) {
    const question = `${firstNumber} + ${secondNumber}`;
    const answer = firstNumber + secondNumber;
    return startGame(question, String(answer));
  } if (operation === 2) {
    const question = `${firstNumber} - ${secondNumber}`;
    const answer = firstNumber - secondNumber;
    return startGame(question, String(answer));
  }
  const question = `${firstNumber} * ${secondNumber}`;
  const answer = firstNumber * secondNumber;
  return startGame(question, String(answer));
};

const runGame = () => startGame(description, questionAnswer);

export default runGame;
