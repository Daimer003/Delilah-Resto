const {Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.send('Ruta en funcionamiento');
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recibido');
})




module.exports = router;