const getEmployees = require("../sql/get-employees");

/**
 * WHEN I choose to view all employees
 * THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
 */
const showAllEmployees = async () => {
	const employees = await getEmployees();

	//TODO: Make a nice formatted output:
	console.table(employees);
};

module.exports = showAllEmployees;
