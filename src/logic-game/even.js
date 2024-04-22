import getRandomNumber from '../randomNumber.js';
import startGames from '../index.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const gameStart = () => startGames(getQuestionAndAnswer, description);

export default gameStart;
