import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const hideNumber = (progression) => {
  const hiddenIndex = Math.floor(Math.random() * progression.length);
  const hiddenNumber = progression[hiddenIndex];
  const question = progression.map((num, index) => (index === hiddenIndex ? '..' : num));
  return { question, hiddenNumber };
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  let isGameOver = false;

  while (!isGameOver) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const length = Math.floor(Math.random() * 6) + 5;

    const progression = generateProgression(start, step, length);
    const { question, hiddenNumber } = hideNumber(progression);

    console.log(`Question: ${question.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === hiddenNumber) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      isGameOver = true;
    }

    if (correctAnswers === 3) {
      console.log(`Congratulations, ${name}!`);
      isGameOver = true;
    }
    console.log();
  }
};
export default () => {
  startGame();
};
