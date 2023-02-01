const connection = require("./connection");

/**
 * Adds a new row to the 'employees' table with the following data:
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {number} roleId 
 * @param {number?} managerId 
 */
const addEmployee = async (firstName, lastName, roleId, managerId = null) => {
	try {
		const sql = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
		const args = [firstName, lastName, roleId, managerId];
		const [header, fields] = await connection.query(sql, args);
	} catch (error) {
		console.log(error);
	}
};

module.exports = addEmployee;
