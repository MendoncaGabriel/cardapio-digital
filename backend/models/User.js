const {DataTypes} = require('sequelize')
const db = require('../config/database')

// User
const User = db.define('User', {
    name: {type: DataTypes.STRING, required: true},
    email: {type: DataTypes.STRING, required: true},
    password: {type: DataTypes.STRING, required: true}
})

module.exports = User