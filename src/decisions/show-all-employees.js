const getEmployeesForDisplay = require("../sql/get-employees-for-display");
const outTable = require("../util/table");

/**
 * WHEN I choose to view all employees
 * THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
 */
const showAllEmployees = async () => {
	const employees = await getEmployeesForDisplay();

	console.log("Employees:");
	outTable(employees);
};

module.exports = showAllEmployees;
