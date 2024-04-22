import startGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (firstNum === 0) {
    return secondNum;
  }

  return getGreatestCommonDivisor(secondNum % firstNum, firstNum);
};

const gameDescription = 'Find the greatest common divisor of given numbers';

const generateRoundsData = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const greatestCommonDivisor = getGreatestCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = greatestCommonDivisor.toString();

  return [question, correctAnswer];
};

export default () => {
  startGame(gameDescription, generateRoundsData);
};
