import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[fields.length - 1].trim();

        if (field !== 'field') {
          const firstName = fields[0].trim();
          if (students[field]) {
            students[field].push(firstName);
          } else {
            students[field] = [firstName];
          }
        }
      });

      resolve(students);
    });
  });
};

module.exports = readDatabase;
