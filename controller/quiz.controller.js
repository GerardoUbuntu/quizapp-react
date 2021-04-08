const status = require('http-status');
const {
  create,
  findAll,
  findAllByUser,
  findById,
  deleteQuiz,
  editQuiz,
} = require('../service/quiz.service');

module.exports = {
  getQuizzes: async (req, res) => {
    try {
      const results = await findAll();
      return res.status(status.OK).json({ data: results });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    }
  },

  addQuiz: async (req, res) => {
    const quiz = req.body.quiz;
    try {
      const result = await create(quiz);
      return res.status(status.OK).json({ data: result });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    }
  },

  getQuizById: async (req, res) => {
    const quizId = req.params.id;
    try {
      const result = await findById(quizId);
      return res.status(status.OK).json({ data: result });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    }
  },

  getQuizzesByUserId: async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await findAllByUser(userId);
      return res.status(status.OK).json({ data: result });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    }
  },

  editQuiz: async (req, res) => {
    const user = req.params.quiz;
    try {
      const result = await editQuiz(user);
      return res.status(status.OK).json({ data: result });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    }
  },

  deleteQuiz: async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await deleteQuiz(userId);
      return res.status(status.OK).json({ message: result });
    } catch (err) {
      return res.status(status.INTERNAL_SERVER_ERROR).json({ message: err });
    }
  },
};
