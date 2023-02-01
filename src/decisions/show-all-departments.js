const getDepartmentsForDisplay = require("../sql/get-departments-for-display");
const outTable = require("../util/table");

/**
 * WHEN I choose to view all departments
 * THEN I am presented with a formatted table showing department names and department ids
 */
const showAllDepartments = async () => {
	const departments = await getDepartmentsForDisplay();

	console.log("Departments:");
	outTable(departments);
};

module.exports = showAllDepartments;
