const connection = require("./connection");

/**
 * Selects all the employees from the database.
 * @returns data from mysql.
 */
const getEmployees = async () => {
	try {
		const sql = "SELECT * FROM employees;";
		const [rows, fields] = await connection.query(sql);
		
		return rows;
	} catch (error) {
		console.log(error);
		return [];
	}
};

module.exports = getEmployees;
