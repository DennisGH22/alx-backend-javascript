const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const lines = data.trim().split('\n');

  const fieldCounts = {};

  lines.forEach(line => {
    const fields = line.split(',');
    const field = fields[fields.length - 1].trim();

    if (field !== 'undefined' && field !== 'field') {
      if (fieldCounts[field]) {
        fieldCounts[field].push(fields[0].trim());
      } else {
        fieldCounts[field] = [fields[0].trim()];
      }
    }
  });

  console.log(`Number of students: ${lines.length - 1}`);

  let totalStudents = 0;
  for (const field in fieldCounts) {
    totalStudents += fieldCounts[field].length;
    console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
  }
};

module.exports = countStudents;
