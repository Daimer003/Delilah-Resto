const {DataTypes} = require('sequelize');
const connection = require('../../db/connection');

const createProducts = connection.define(
  'products',
  {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      img_url: DataTypes.STRING
  },
  {timestamps: false}

)

module.exports = createProducts;