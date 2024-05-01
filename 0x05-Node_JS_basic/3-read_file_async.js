const fs = require('fs');

const countStudents = (path) => {
  new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).map((line) => line.split(','));
      const numberOfStudents = students.length;

      console.log(`Number of students: ${numberOfStudents}`);

      const fieldCounts = {};

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[fields.length - 1].trim();

        if (field !== 'field') {
          if (fieldCounts[field]) {
            fieldCounts[field].push(fields[0].trim());
          } else {
            fieldCounts[field] = [fields[0].trim()];
          }
        }
      });

      for (const field in fieldCounts) {
        if (field) {
          console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
        }
      }

      const result = {
        numberOfStudents,
        fieldCounts
      };

      resolve(result);
    });
  });
};

module.exports = countStudents;
