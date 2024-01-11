const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    // password? 
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate: {
                isEmail: true
            }

        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          
        }
    }

    // not finished 
);

module.exports = User;