const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8');
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
      console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
