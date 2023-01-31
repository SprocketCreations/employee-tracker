
/**
 * @param {object[]} roles the roles.
 * @returns a inquirer formatted array of choices for the roles.
 */
const getRoleChoices = roles => {
	const roleChoices = [];
	roles.forEach(role => {
		roleChoices.push({
			name: role.title,
			value: role.id,
		});
	});
	return roleChoices;
};

module.exports = getRoleChoices;
