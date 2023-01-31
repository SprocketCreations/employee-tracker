const inquirer = require("inquirer");
const addDepartment = require("../sql/add-department");

/**
 * WHEN I choose to add a department
 * THEN I am prompted to enter the name of the department and that department is added to the database
 */
const promptForDepartment = async () => {
	const { name } = await inquirer.prompt([
		{
			type: "input",
			message: "Please enter a name for your new department:",
			name: "name",
		}
	]);
	
	await addDepartment(name);

	console.log(`Created new department: ${name}`);
};

module.exports = promptForDepartment;
