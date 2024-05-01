const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents('database.csv')
    .then(({ numberOfStudents, fieldCounts }) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${numberOfStudents}\n`);
      Object.entries(fieldCounts).forEach(([field, studentsList], index, arr) => {
        res.write(`Number of students in ${field}: ${studentsList.length}. List: ${studentsList.join(', ')}`);
        if (index !== arr.length - 1) {
          res.write('\n');
        }
      });
      res.send();
    });
});

const server = app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = server;
