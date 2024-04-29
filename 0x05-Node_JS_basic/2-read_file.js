const fs = require('fs');

const countStudents = (path) => {
  try {
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

	lines.shift();
	lines.pop();
	console.log(lines)

	let totalStudents = 0;
	for (i = 0; i <= lines.length; i++) {
		totalStudents += [i].length
	}
	console.log(`Number of students: ${totalStudents}`);

    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
