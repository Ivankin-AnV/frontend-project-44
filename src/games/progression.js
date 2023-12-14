import startGame from '../index.js';
import { getRandomNumber } from '../randomNumber.js';

const progressionLength = 10;
const description = 'What number is missing in the progression?';

const getProgression = () => {
  let progressionNumber = getRandomNumber(0, 50);
  const step = getRandomNumber(2, 5);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;

  return [question, correctAnswer];
};

export default () => {
  startGame(description, getQuestionAndAnswer);
};