const Decision = require("../lib/Decision");

const showAllDepartments = require("./decisions/show-all-departments");
const showAllRoles = require("./decisions/show-all-roles");
const showAllEmployees = require("./decisions/show-all-employees");
const promptForDepartment = require("./decisions/prompt-for-department");
const promptForRole = require("./decisions/prompt-for-role");
const promptForEmployee = require("./decisions/prompt-for-employee");
const promptForUpdateEmployeeRole = require("./decisions/prompt-for-update-employee-role");

/**
 * @param {number} decision Use the 'Decision' enum.
 * @returns {Function} the function that should be called to resolve the user's request.
 */
const getDecisionFunction = (decision) => {
	switch (decision) {
		case Decision.ViewDepartments: return showAllDepartments;
		case Decision.ViewRolls: return showAllRoles;
		case Decision.ViewEmployees: return showAllEmployees;
		case Decision.AddDepartment: return promptForDepartment;
		case Decision.AddRole: return promptForRole;
		case Decision.AddEmployee: return promptForEmployee;
		case Decision.UpdateEmployeeRole: return promptForUpdateEmployeeRole;
		default: throw new Error("How did we get here?");
	};
};

module.exports = getDecisionFunction;
