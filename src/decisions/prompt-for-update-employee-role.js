const inquirer = require("inquirer");
const getEmployeeChoices = require("../inquirer/get-employee-choices");
const getRoleChoices = require("../inquirer/get-role-choices");
const getEmployees = require("../sql/get-employees");
const getRoles = require("../sql/get-roles");
const setEmployeeRole = require("../sql/set-employee-role");

/**
 * WHEN I choose to update an employee role
 * THEN I am prompted to select an employee to update and their new role and this information is updated in the database
 */
const promptForUpdateEmployeeRole = async () => {
	const employees = await getEmployees();
	const roles = await getRoles();

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
			choices: getRoleChoices(roles),
		},
	]);

	await setEmployeeRole(employeeId, roleId);

	const employee = employees.find(employee => employee.id == employeeId);

	/** @type {string} The name of the employee edited. */
	const name = `${employee.first_name} ${employee.last_name}`;
	/** @type {string} The name of the employee's new role. */
	const role = roles.find(role => role.id == roleId).title;
	console.log(`Updated ${name}${name.charAt(name.length - 1) == "s" ? "'" : "'s"} role to ${role}.`);
};

module.exports = promptForUpdateEmployeeRole;
