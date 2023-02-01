const connection = require("./connection");

/**
 * Selects all the roles from the database.
 * @returns data from mysql.
 */
const getRolesForDisplay = async () => {
	try {
		const sql = "SELECT roles.title AS `Title`, roles.salary AS `Salary`, departments.name AS `Department` FROM roles JOIN departments ON roles.department_id=departments.id;";
		const [rows, fields] = await connection.query(sql);
		
		return rows;
	} catch (error) {
		console.log(error);
		return [];
	}
};

module.exports = getRolesForDisplay;
