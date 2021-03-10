const db = require('../models');
const Quiz = db.quiz;
const User = db.user;

let quizService = {
  create: async (quiz) => {
    return new Promise(async (resolve, reject) => {
      const result = await Quiz.create(quiz).catch((err) => reject(err));
      resolve(result);
    });
  },

  findAll: async () => {
    return new Promise(async (resolve, reject) => {
      const results = await Quiz.findAll().catch((err) => reject(err));
      resolve(results);
    });
  },

  findAllByUser: (userId) => {
    return new Promise(async (resolve, reject) => {
      const results = await User.findByPK(userId, {
        attributes: ['firstName', 'lastName', 'username', 'email', 'password'],
        include: [
          {
            model: Quiz,
            as: 'quizzes',
          },
        ],
      }).catch((err) => reject(err));
      console.log(results);
      resolve(results);
    });
  },

  findById: (id) => {
    return new Promise(async (resolve, reject) => {
      const result = await Quiz.findByPK(id).catch((err) => reject(err));
      resolve(result);
    });
  },
};

module.exports = quizService;
