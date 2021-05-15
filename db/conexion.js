const Sequelize = require('sequelize');
const path = 'mysql://root:root@localhost:3306/Delilah-Resto';


const conexion = new Sequelize(path);

conexion.authenticate()
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