const Sequelize = require('sequelize');
const db = require('../Config/Database');

const Users = db.define('users', {
	// Model attribute
	name: {
		type: Sequelize.STRING,
	},
	email: {
		type: Sequelize.STRING,
	},
	token: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4
	}
},{
	// Sequelize options
	// freezeTableName: true,
	tableName: 'users',
	paranoid: true,
	createdAt: 'createdAt',
	updatedAt: 'updatedAt',
	deletedAt: 'deletedAt',
})

module.exports = Users;