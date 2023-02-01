const connection = require("./connection");

/**
 * Adds a new row to the 'roles' table with the following data:
 * @param {string} title 
 * @param {number} salary 
 * @param {number} departmentId 
 */
const addRole = async (title, salary, departmentId) => {
	try {
		const sql = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);";
		const args = [title, salary, departmentId];
		const [header, fields] = await connection.query(sql, args);
	} catch (error) {
		console.log(error);
	}
};

module.exports = addRole;
