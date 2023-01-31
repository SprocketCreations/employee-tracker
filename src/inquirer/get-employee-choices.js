
/**
 * @param {object[]} employees the employees.
 * @param {boolean} addNoneAsFirstOption
 * @returns a inquirer formatted array of choices for the employees.
 */
const getEmployeeChoices = (employees, addNoneAsFirstOption = false) => {
	const employeeChoices = [];
	if (addNoneAsFirstOption) {
		employeeChoices.push({
			name: "None",
			value: null,
		});
	}
	employees.forEach(employee => {
		employeeChoices.push({
			name: `${employee.first_name} ${employee.last_name}`,
			value: employee.id,
		});
	});
	return employeeChoices;
};

module.exports = getEmployeeChoices;
