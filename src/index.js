const express = require('express');
const app = express();


app.use(express.json());


app.use('/api/user',require('./routes/users.js'));


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000')
})