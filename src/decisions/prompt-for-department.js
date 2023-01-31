const inquirer = require("inquirer");

/**
 * WHEN I choose to add a department
 * THEN I am prompted to enter the name of the department and that department is added to the database
 */
const promptForDepartment = async () => {
	const answers = await inquirer.prompt([
		{
			type: "input",
			message: "Please enter a name for your new department:",
			name: "departmentName",
		}
	]);
	console.log(`Department name: ${answers.departmentName}`);
	// TODO: Add department to database.
};

module.exports = promptForDepartment;
