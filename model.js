let Sequelize = require("sequelize")
let sequelize = require("./db")

const User = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	},
}, {
		tableName: "allUsers",
		timestamps: false
	}
)

module.exports = User