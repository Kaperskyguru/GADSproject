const Sequelize = require('sequelize');
require('dotenv').config();

const { DB_DATABASE, DB_DIALECT, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } = process.env;

const config = {
	database: DB_DATABASE,
	dialect: DB_DIALECT,
	host: DB_HOST,
	password: DB_PASSWORD,
	port: DB_PORT,
	user: DB_USER
};
const db = new Sequelize(config);

db.authenticate()
	.then(() => {
		console.log('connected');
	})
	.catch(err => {
		console.error(err);
	});

module.exports = db;
