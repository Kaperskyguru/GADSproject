const Sequelize = require('sequelize');
const dbs = require('./dbs');

const Users = dbs.define('users', {
	email: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	},
	username: {
		type: Sequelize.STRING
    },
    name: {
		type: Sequelize.STRING
	}
});

module.exports = Users;
