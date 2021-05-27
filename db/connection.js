const Sequelize = require('sequelize');
const NODE_ENV = process.env.NODE_ENV || 'developer';
require('dotenv').config({
   path: `./.env.${NODE_ENV}`
});

const connection = new Sequelize(
   'delilah_resto',
    process.env.DB_USER,
    process.env.DB_PASS,
    {
       host: process.env.DB_HOST,
       dialect: process.env.DB_DIALECT
    }

);

connection
        .authenticate()
.then(()=> {
   console.log('Conexion exitosa');
})
.catch(err => {
    console.log(err);
})
// .finally(()=> {
//    connection.close();
// })


module.exports = connection;