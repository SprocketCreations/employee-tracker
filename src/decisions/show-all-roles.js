const getRoles = require("../sql/get-roles");

/**
 * WHEN I choose to view all roles
 * THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
 */
const showAllRoles = async () => {
	const roles = await getRoles();

	// TODO: Make formatted output.
	console.table(roles);
};

module.exports = showAllRoles;
