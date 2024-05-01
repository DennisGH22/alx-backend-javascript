# Unittests in JS

## Tasks

### 0. Basic test with Mocha and Node assertion library

#### Install Mocha using npm:

- Set up a scripts in your package.json to quickly run Mocha using npm test
- You have to use assert

#### Create a new file named 0-calcul.js:

- Create a function named calculateNumber. It should accepts two arguments (number) a and b
- The function should round a and b and return the sum of it

#### Test cases

- Create a file 0-calcul.test.js that contains test cases of this function
- You can assume a and b are always number
- Tests should be around the “rounded” part

#### Tips:

- For the sake of the example, this test suite is slightly extreme and probably not needed
- However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

#### Requirements:

- You have to use assert
- You should be able to run the test suite using npm test 0-calcul.test.js
- Every test should pass without any warning
