const connection = require("./connection");

/**
 * Updates the role of the given row in 'employees'.
 * @param {number} employeeId 
 * @param {number} roleId 
 */
const setEmployeeRole = async (employeeId, roleId) => {
	try {
		const sql = "UPDATE employees SET role_id = ? WHERE id = ?;";
		const args = [roleId, employeeId];
		const [header, fields] = await connection.query(sql, args);
	} catch (error) {
		console.log(error);
	}
};

module.exports = setEmployeeRole;