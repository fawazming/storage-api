const Sequelize = require('sequelize');
const db = require('../Config/Database');


const Store = db.define('data', {
	// Model attribute
	name: {
		type: Sequelize.STRING
	},
	value: {
		type: Sequelize.STRING
	},
	token: {
		type: Sequelize.STRING
	}
},{
	// Sequelize options
	// freezeTableName: true,
	tableName: 'data',
	paranoid: true,
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
	deletedAt: 'deletedAt',
})

module.exports = Store;