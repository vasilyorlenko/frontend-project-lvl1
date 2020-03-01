import readlineSync from 'readline-sync';

const greetingPrompt = () => {
  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anonymous',
  });

  console.log(`Hello, ${name}!`);
};

export default greetingPrompt;
