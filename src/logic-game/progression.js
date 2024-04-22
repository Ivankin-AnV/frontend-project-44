import getRandomNumber from '../randomNumber.js';
import startGame from '../index.js';

const generateQuestion = (start, diff, length, ind) => {
  const filledArray = Array.apply(0, Array(length)).map(() => (start));
  const arrayProgression = filledArray.map((el, index) => {
    const result = el + diff * index;
    return index === ind ? '..' : result;
  }, 1);
  return arrayProgression.join(' ');
};

const lengthOfProgression = 10;

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const start = getRandomNumber();
  const diff = getRandomNumber();
  const indexOfHiddenValue = getRandomNumber(0, lengthOfProgression - 1);
  const question = generateQuestion(start, diff, lengthOfProgression, indexOfHiddenValue);
  const answer = `${start + diff * indexOfHiddenValue}`;
  return [question, answer];
};

const runGame = () => startGame(getQuestionAndAnswer, description);

export default runGame;
