const express = require('express');
const router = express.Router();
const controller = require('../controller/auth.controller');
const auth = require('./middleware/auth');

router.post('/signUp', controller.signUp);
router.post('/signIn', controller.signIn);
router.get('/user', auth, controller.loadUser);

module.exports = router;
