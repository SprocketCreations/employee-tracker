const inquirer = require("inquirer");
const getEmployeeChoices = require("../inquirer/get-employee-choices");
const getRoleChoices = require("../inquirer/get-role-choices");
const getEmployees = require("../sql/get-employees");
const getRoles = require("../sql/get-roles");

/**
 * WHEN I choose to add an employee
 * THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
 */
const promptForEmployee = async () => {
	const roles = await getRoles();
	const employees = await getEmployees();

	const {firstName, lastName, roleId, managerId} = await inquirer.prompt([
		{
			type: "input",
			message: "Please enter their first name:",
			name: "firstName",
		},{
			type: "input",
			message: "Please enter their last name:",
			name: "lastName",
		},{
			type: "input",
			message: "Please select their role:",
			name: "roleId",
			choices: getRoleChoices(roles),
		},{
			type: "input",
			message: "Please select their manager:",
			name: "managerId",
			choices: getEmployeeChoices(employees),
		},
	]);
	console.log(`Employee ${firstName} ${lastName} has role ${roleId} and manager ${managerId}`);
	// TODO: Add employee to database.
};

module.exports = promptForEmployee;
