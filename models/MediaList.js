const { type } = require('express/lib/response');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MediaList extends Model{}

ediaList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        medium_id: {
            type: DataTypes.INTEGER
        },
        list_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'media_list',
    }
)

module.exports = MediaList;
