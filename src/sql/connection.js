const mysql = require("mysql2");

const options = {
	host: "127.0.0.1",
	user: "root",
	password: "password",
	database: "employee_tracker_db",
};

const connection = mysql.createConnection(options);

module.exports = connection.promise();
