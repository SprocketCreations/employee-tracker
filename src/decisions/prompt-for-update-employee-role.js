const inquirer = require("inquirer");
const getEmployeeChoices = require("../inquirer/get-employee-choices");
const getRoleChoices = require("../inquirer/get-role-choices");
const getDepartments = require("../sql/get-departments");
const getEmployees = require("../sql/get-employees");

/**
 * WHEN I choose to update an employee role
 * THEN I am prompted to select an employee to update and their new role and this information is updated in the database
 */
const promptForUpdateEmployeeRole = async () => {
	const employees = await getEmployees();
	const departments = await getDepartments();

	const { employeeId, roleId } = await inquirer.prompt([
		{
			type: "list",
			message: "Please select an employee to edit:",
			name: "employeeId",
			choices: getEmployeeChoices(employees),
		}, {
			type: "list",
			message: "Please select a new role:",
			name: "roleId",
			choices: getRoleChoices(departments),
		},
	]);

	console.log(`Selected employee ${employeeId} and role ${roleId}`);
	// TODO: Update the employee in the db
};

module.exports = promptForUpdateEmployeeRole;
