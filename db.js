let Sequelize = require("sequelize")
let sequelize = new Sequelize("postgres://postgres:secret@localhost:5432/postgres", {
	operatorsAliases: false
})

module.exports = sequelize