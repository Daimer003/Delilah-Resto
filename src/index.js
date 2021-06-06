const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users',require('./routes/users.js'));
app.use('/api/products', require('./routes/products.js'));


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
})