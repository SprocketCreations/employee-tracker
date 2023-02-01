const connection = require("./connection");

/**
 * Selects all the departments from the database.
 * @returns data from mysql.
 */
const getDepartments = async () => {
	try {
		const sql = "SELECT * FROM departments;";
		const [rows, fields] = await connection.query(sql);
		
		return rows;
	} catch (error) {
		console.log(error);
		return [];
	}
};

module.exports = getDepartments;
