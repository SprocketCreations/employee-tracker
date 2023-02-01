const connection = require("./connection");

/**
 * Selects all the employees from the database.
 * @returns data from mysql.
 */
const getEmployeesForDisplay = async () => {
	try {
		const sql = "SELECT e.first_name AS `First Name`, e.last_name AS `Last Name`, roles.title AS `Role`, m.last_name AS `Manager` FROM employees e JOIN roles ON role_id=roles.id JOIN employees m ON e.manager_id=m.id;";
		const [rows, fields] = await connection.query(sql);
		
		return rows;
	} catch (error) {
		console.log(error);
		return [];
	}
};

module.exports = getEmployeesForDisplay;
