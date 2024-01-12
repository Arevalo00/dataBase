const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Layaway extends Model {}

Layaway.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
        
        },
        
        
    }
)