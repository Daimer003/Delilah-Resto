const { Router } = require('express');
const router = Router();
const productsController = require('../controllers/products');

router.route('/').get(productsController.getAll).post(productsController.create);

module.exports = router;