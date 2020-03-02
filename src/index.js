import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ', {
    defaultInput: 'anonymous',
  });

  console.log(`Hello, ${name}!`);
  return name;
};

export default askName;
