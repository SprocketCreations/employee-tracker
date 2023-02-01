const connection = require("./connection");

/**
 * Adds a new row to the 'departments' table with the following data:
 * @param {string} name 
 */
const addDepartment = async name => {
	try {
		const sql = "INSERT INTO departments (name) VALUES (?);";
		const args = [name];
		const [header, fields] = await connection.query(sql, args);
	} catch (error) {
		console.log(error);
	}
};

module.exports = addDepartment;
