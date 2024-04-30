const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.statusCode = 200;
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
        res.end();
      });
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
