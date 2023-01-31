const inquirer = require("inquirer");
const Decision = require("./lib/Decision");

const getDecisionFunction = require("./src/get-decision");

/**
 * Asks the user what task they would like to perform.
 */
const promptTask = async () => {
	let running = true;
	while (running) {
		const answer = await inquirer.prompt([
			{
				type: "list",
				message: "What would you like to do?",
				name: "decision",
				choices: [
					{ name: "View all departments", value: Decision.ViewDepartments },
					{ name: "View all roles", value: Decision.ViewRolls },
					{ name: "View all employees", value: Decision.ViewEmployees },
					{ name: "Add a department", value: Decision.AddDepartment },
					{ name: "Add a role", value: Decision.AddRole },
					{ name: "Add an employee", value: Decision.AddEmployee },
					{ name: "Update an employee role", value: Decision.UpdateEmployeeRole },
				],
			},
		]);

		const nextPrompt = getDecisionFunction(answer.decision);
		await nextPrompt();
	}
};

promptTask();
