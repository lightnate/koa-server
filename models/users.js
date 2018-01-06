module.exports = function(sequelize, Sequelize) {
	return sequelize.define('users', {
		name: Sequelize.STRING,
		age: Sequelize.INTEGER
	})
}