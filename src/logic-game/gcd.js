import runGame from '../index.js';
import { getRandomNumber } from '../randomNumber.js';

const description = 'Find the greatest common divisor of given numbers';

const findGcd = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return num1 + num2;
  }
  if (num1 > num2) {
    return findGcd(num1 - num2, num2);
  }
  return findGcd(num1, num2 - num1);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 50);
  const secondNubmer = getRandomNumber(1, 50);

  const question = `${firstNumber} ${secondNubmer}`;
  const correctAnswer = String(findGcd(firstNumber, secondNubmer));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};