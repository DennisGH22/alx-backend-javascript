console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (chunk) => {
  const input = chunk.toString().trim();

  console.log(`Your name is: ${input}`);
  process.exit(0);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
