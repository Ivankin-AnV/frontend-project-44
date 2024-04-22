import readlineSync from 'readline-sync';

const generateRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideNumber = (progression) => {
  const progressionCopy = [...progression];
  const hiddenIndex = generateRandomNumber(progressionCopy.length);
  const hiddenNumber = progressionCopy[hiddenIndex];
  progressionCopy[hiddenIndex] = '..';
  return { question: progressionCopy, hiddenNumber };
};

const displayCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const displayQuestion = (question) => {
  console.log(`Question: ${question.join(' ')}`);
};

const startGame = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const start = generateRandomNumber(10);
    const step = generateRandomNumber(10);
    const length = generateRandomNumber(6) + 5;

    const progression = generateProgression(start, step, length);
    const { question, hiddenNumber } = hideNumber(progression);

    displayQuestion(question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === hiddenNumber) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  displayCongratulations(name);
};

export default () => {
  startGame();
};
