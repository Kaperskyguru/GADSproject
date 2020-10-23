const Sequelize = require('sequelize');
const dbs = require('./dbs');

const Product = dbs.define('users', {
	productcode: {
		type: Sequelize.STRING
	},
	amount: {
		type: Sequelize.INTEGER
	},
	qualityinkg: {
		type: Sequelize.INTEGER
    },
    name: {
		type: Sequelize.STRING
    },
    description: {
		type: Sequelize.STRING
	}
});

module.exports = Product;