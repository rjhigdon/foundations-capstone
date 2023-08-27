require('dotenv').config()
const CONNECTION_STRING = process.env.CONNECTION_STRING
const {Sequelize} = require('sequelize')

console.log(CONNECTION_STRING)

const db = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
})


module.exports = db