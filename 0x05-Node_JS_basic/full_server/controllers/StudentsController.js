const readDatabase = require('../utils');

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const students = await readDatabase(req.databasePath);
            res.status(200).send(`This is the list of our students\n${formatStudents(students)}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAllStudentsByMajor(req, res) {
        const { major } = req.params;
        if (major !== 'CS' && major !== 'SWE') {
            res.status(500).send('Major parameter must be CS or SWE\n');
            return;
        }

        try {
            const students = await readDatabase(req.databasePath);
            const studentsList = students[major] || [];
            res.status(200).send(`List: ${studentsList.join(', ')}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

const formatStudents = (students) => {
    let result = '';
    Object.entries(students).sort((a, b) => a[0].localeCompare(b[0])).forEach(([field, names], index, arr) => {
        result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
		if (index !== arr.length - 1) {
			result += '\n';
		}
    });
    return result;
};

export default StudentsController;
