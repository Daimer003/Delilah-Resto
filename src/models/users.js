const {DataTypes} = require('sequelize');
const connection = require('../../db/connection');


const usersModel = connection.define(
    'user',
    {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        roles_id: DataTypes.INTEGER
    },
    { timestamps: false }    
);

module.exports =  usersModel;  