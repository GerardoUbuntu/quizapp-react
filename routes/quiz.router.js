const express = require('express');
const router = express.Router();
const auth = require('./middleware/auth');
const controller = require('../controller/quiz.controller');

router.post('/', controller.addQuiz);
router.get('/', controller.getQuizzes);
router.get('/id/:id', controller.getQuizById);
router.get('/user/:id', controller.getQuizzesByUserId);
router.put('/:id', controller.editQuiz);
router.delete('/:id', controller.deleteQuiz);

module.exports = router;
