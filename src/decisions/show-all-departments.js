const getDepartments = require("../sql/get-departments");

/**
 * WHEN I choose to view all departments
 * THEN I am presented with a formatted table showing department names and department ids
 */
const showAllDepartments = async () => {
	const departments = await getDepartments();

	// TODO: Make nice formatted table.
	console.table(departments);
};

module.exports = showAllDepartments;
