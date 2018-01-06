const Sequelize = require('sequelize')
const {database, username, password, options} = require('../config/mysql_config')

const sequelize = new Sequelize(database, username, password, options)

const Users = sequelize.import('./users')

sequelize.sync()

module.exports = {
	Users
}