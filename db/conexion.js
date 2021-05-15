const Sequelize = require('sequelize');
const NODE_ENV = process.env.NODE_ENV || 'developer';
require('dotenv').config({
   path: `./.env.${NODE_ENV}`
});

const conexion = new Sequelize(
   'Delilah-Resto',
    process.env.DB_USER,
    process.env.DB_PASS,
    {
       host: process.env.DB_HOST,
       dialect: process.env.DB_DIALECT
    }

);

conexion
        .authenticate()
.then(()=> {
   console.log('Conexion exitosa');
})
.catch(err => {
    console.log(err);
})
.finally(()=> {
   conexion.close();
})


module.exports = conexion;