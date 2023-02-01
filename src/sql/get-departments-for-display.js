const connection = require("./connection");

/**
 * Selects all the departments from the database.
 * @returns data from mysql.
 */
const getDepartmentsForDisplay = async () => {
	try {
		const sql = "SELECT name AS `Name` FROM departments;";
		const [rows, fields] = await connection.query(sql);
		
		return rows;
	} catch (error) {
		console.log(error);
		return [];
	}
};

module.exports = getDepartmentsForDisplay;
