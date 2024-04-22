import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const operationSymbols = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperationSymbol = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolsLength);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

const calcArithmeticOperation = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const firstNumber = getRandomNumber(0, 10);
  const secondNubmer = getRandomNumber(0, 10);

  const question = `${firstNumber} ${randomSymbol} ${secondNubmer}`;
  const correctAnswer = String(calcArithmeticOperation(randomSymbol, firstNumber, secondNubmer));

  return [question, correctAnswer];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
