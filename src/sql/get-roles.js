const connection = require("./connection");

/**
 * Selects all the roles from the database.
 * @returns data from mysql.
 */
const getRoles = async () => {
	try {
		const sql = "SELECT * FROM roles;";
		const [rows, fields] = await connection.query(sql);
		
		return rows;
	} catch (error) {
		console.log(error);
		return [];
	}
};

module.exports = getRoles;
