// config connexion BBD mySQL

let mysql = require('mysql');
let connection = mysql.createConnection({
	host : 'localhost',
	user : 'sf',
	password : 'secret',
	database : 'tolist'
});

connection.connect();

module.exports = connection