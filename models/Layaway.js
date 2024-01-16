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
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
          date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },

        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project',
    }
);

module.exports = Layaway;