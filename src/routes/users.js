const {Router} = require('express');
const router = Router();
const UserController = require('../controllers/users');

//Routes user
router.route('/').get(UserController.getAll).post(UserController.create)
router.route('/:id').patch(UserController.updateUser).delete(UserController.deleteUser)



module.exports = router;