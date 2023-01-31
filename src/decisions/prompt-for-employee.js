const inquirer = require("inquirer");
const getEmployeeChoices = require("../inquirer/get-employee-choices");
const getRoleChoices = require("../inquirer/get-role-choices");
const addEmployee = require("../sql/add-employee");
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
			choices: getEmployeeChoices(employees, true),
		},
	]);
	await addEmployee(firstName, lastName, roleId, managerId);

	console.log(`Registered new employee: ${firstName} ${lastName}\nRole: ${roleId}.`);
	if(managerId)
		console.log(`Manager: ${managerId}`);
};

module.exports = promptForEmployee;
