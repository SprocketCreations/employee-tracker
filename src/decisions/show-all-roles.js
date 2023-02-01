const getRolesForDisplay = require("../sql/get-roles-for-display");
const outTable = require("../util/table");

/**
 * WHEN I choose to view all roles
 * THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
 */
const showAllRoles = async () => {
	const roles = await getRolesForDisplay();

	console.log("Roles:");
	outTable(roles);
};

module.exports = showAllRoles;
