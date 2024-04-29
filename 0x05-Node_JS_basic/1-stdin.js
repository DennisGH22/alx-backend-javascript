console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const input = process.stdin.read();

  input ? process.stdout.write(`Your name is: ${input}`) : null;
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
