const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');
const auth = require('./middleware/auth');

router.get('/', controller.getUsers);
router.get('/:id', auth, controller.getUser);
router.put('/:id', auth, controller.editUser);
router.delete('/:id', auth, controller.deleteUser);

module.exports = router;
