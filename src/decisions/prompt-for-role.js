const inquirer = require("inquirer");
const getDepartmentChoices = require("../inquirer/get-department-choices");
const getDepartments = require("../sql/get-departments");

/**
 * WHEN I choose to add a role
 * THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
 */
const promptForRole = async () => {
	const departments = await getDepartments();

	const { title, salary, departmentId } = await inquirer.prompt([
		{
			type: "input",
			message: "Please enter this role's title:",
			name: "title",
		}, {
			type: "input",
			message: "Please enter this role's salary:",
			name: "salaryName",
		}, {
			type: "list",
			message: "Please select this role's department:",
			name: "departmentId",
			choices: getDepartmentChoices(departments),
		},
	]);

	console.log(`Role: ${title}, Salary: ${salary}, Department: ${departmentId}`);

	// TODO: Store the new role in the db
};

module.exports = promptForRole;
