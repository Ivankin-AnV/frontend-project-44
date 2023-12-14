import startGame from '../index.js';
import { getRandomNumber } from '../randomNumber.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrimeNumber = (number) => {
  for (let a = 2; a < number; a += 1) {
    if (number % a === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 50);
  const answer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, answer];
};
export default () => {
  startGame(description, getQuestionAndAnswer);
};