import startGame from '../index.js';
import { getRandomNumber } from '../randomNumber.js';

const progressionlength = 10;
const description = 'What number is missing in the progression?';

const getArithmeticProgression = () => {
  let progressionNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(2, 100);
  const progression = [];

  for (let i = 0; i < progressionlength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getArithmeticProgression();
  const randomIndex = getRandomNumber(0, progressionlength - 1);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;

  return [question, correctAnswer];
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};
