
/**
 * @param {object[]} employees the employees.
 * @returns a inquirer formatted array of choices for the employees.
 */
const getEmployeeChoices = (employees) => {
	const employeeChoices = [{
		name: "None",
		value: null,
	}];
	employees.forEach(employee => {
		employeeChoices.push({
			name: `${employee.first_name} ${employee.last_name}`,
			value: employee.id,
		});
	});
	return employeeChoices;
};

module.exports = getEmployeeChoices;
