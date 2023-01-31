/**
 * @param {object[]} departments the departments.
 * @returns an inquirer formatted array of choices for the departments.
 */
const getDepartmentChoices = departments => {
	const departmentChoices = [];
	departments.forEach(department => {
		departmentChoices.push({
			name: department.name,
			value: department.id,
		});
	});
	return departmentChoices;
};

module.exports = getDepartmentChoices;
