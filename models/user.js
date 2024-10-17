const {datatypes} = require('sequelize')

const db = require('../db/conn')

const User= db.define('user',{
  name:{
    type: DataTypes.STRING,
    allowNull: false
  },

  occupation:{
    type: datatypes.STRING,
    required: true
  },

  newsletter:{
    type: datatypes.BOOLEAN,
  },
})

modules.exports = User