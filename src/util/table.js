const Colors = require("../../lib/Colors");

/**
 * @param {string[]} column
 * @returns {number}
 */
const getColumnWidth = (column) => {
	let width = 0;
	column.forEach(row => {
		width = Math.max(width, row.length);
	});
	return width;
};

/**
 * @param {*[]} rows 
 * @returns {object[]}
 */
const getColumns = (rows) => {
	const columns = [];
	for (const column in rows[0]) {
		columns[column.toString()] = [];
	}
	rows.forEach(row => {
		for (const column in row) {
			columns[column].push(row[column]);
		}
	});
	return columns;
};


/**
 * @param {string[]} out The stream to write to.
 * @param {number[]} widths The width of each column.
 * @param {string} borderStarter The character to write at the start.
 * @param {string} borderLine The character to write at the straights.
 * @param {string} borderBreak The character to write at the breaks between columns.
 * @param {string} borderEnder The character to write at the end.
 */
const appendDelimiter = (out, widths, borderStarter, borderLine, borderBreak, borderEnder) => {
	//build first row
	for (let i = 0; i < widths.length; ++i) {
		if (i === 0) {
			out.push(borderStarter);
		} else {
			out.push(borderBreak);
		}
		const width = widths[i];
		for (let j = 0; j < width; ++j) {
			out.push(borderLine);
		}
	}
	out.push(borderEnder);
	out.push("\n");
};

/**
 * @param {string[]} out The stream to write to.
 * @param {string[]} row The strings to write to the output.
 * @param {number[]} widths 
 * @param {string} color The color to write this row with.
 */
const appendRow = (out, row, widths, color = Colors.none) => {
	let i = 0;
	for (const key in row) {
		const column = row[key];
		out.push(Colors.none);
		out.push("│ ");
		out.push(color);
		out.push(column);
		out.push(Colors.none);
		//Then add spaces until we reach the end of the row.
		const spacesLeft = widths[i] - (column.length + 1);
		for (let j = 0; j < spacesLeft; j++) {
			out.push(" ");
		}
		++i;
	}
	out.push("│\n");
};

/**
 * @param {*[]} table Array of rows.
 */
const formatTable = table => {
	/** @type {string[]} Stringbuilder. */
	const out = [];
	/** @type {number[]} */
	const widths = [];
	const columns = getColumns(table);
	/** @type {string[]} */
	const titles = [];
	for (const columnTitle in columns) {
		titles.push(columnTitle);
		widths.push(2 + Math.max(columnTitle.length, getColumnWidth(columns[columnTitle])));
	}

	// Titlerow
	appendDelimiter(out, widths, "┌", "─", "┬", "┐");
	appendRow(out, titles, widths, Colors.yellow);


	// for each row:
	for (const row of table) {
		appendDelimiter(out, widths, "├", "─", "┼", "┤");
		appendRow(out, row, widths);
	}

	//Done
	appendDelimiter(out, widths, "└", "─", "┴", "┘");
	return out.join("");
};

const convertToStrings = table => {
	table.forEach(row => {
		for (const column in row) {
			row[column] = row[column].toString();
		}
	});
};

const outTable = table => {
	if (table.length === 0) return;

	convertToStrings(table);

	const str = formatTable(table);
	console.log(str);
};

module.exports = outTable;
