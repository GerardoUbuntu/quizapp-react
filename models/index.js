'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.user = require('./User')(sequelize, Sequelize.DataTypes);
db.quiz = require('./Quiz')(sequelize, Sequelize.DataTypes);
db.question = require('./Question')(sequelize, Sequelize.DataTypes);
db.section = require('./Section')(sequelize, Sequelize.DataTypes);
db.answer = require('./Answer')(sequelize, Sequelize.DataTypes);
db.choice = require('./Choice')(sequelize, Sequelize.DataTypes);
db.quizSession = require('./QuizSession')(sequelize, Sequelize.DataTypes);
db.sharedQuiz = require('./SharedQuiz')(sequelize, Sequelize.DataTypes);

db.user.hasMany(db.quiz, { as: 'quizzes', foreignKey: 'userId' });
db.quiz.belongsTo(db.user, { as: 'user', foreignKey: 'userId' });

db.quiz.belongsToMany(db.user, {
  through: db.sharedQuiz,
  as: 'sharedQuizzes',
  foreignKey: 'quizId',
});

db.user.belongsToMany(db.quiz, {
  through: db.sharedQuiz,
  as: 'sharedUsers',
  foreignKey: 'userId',
});

db.question.belongsToMany(db.quiz, {
  through: 'quizQuestion',
  as: 'quizzes',
  foreignKey: 'questionId',
});

db.quiz.belongsToMany(db.question, {
  through: 'quizQuestion',
  as: 'questions',
  foreignKey: 'quizId',
});

db.question.belongsToMany(db.section, {
  through: 'sectionQuestion',
  as: 'sections',
  foreignKey: 'questionId',
});

db.section.belongsToMany(db.question, {
  through: 'sectionQuestion',
  as: 'questions',
  foreignKey: 'sectionId',
});

db.quiz.hasMany(db.section, { as: 'sections', foreignKey: 'quizId' });
db.section.belongsTo(db.quiz, { as: 'quiz', foreignKey: 'quizId' });

db.question.hasMany(db.choice, { as: 'choices', foreignKey: 'questionId' });
db.choice.belongsTo(db.quiz, { as: 'question', foreignKey: 'questionId' });

db.sharedQuiz.hasMany(db.quizSession, { as: 'quizSessions', foreignKey: 'sharedQuizId' });
db.quizSession.belongsTo(db.sharedQuiz, { as: 'sharedQuiz', foreignKey: 'sharedQuizId' });

db.quizSession.hasMany(db.answer, { as: 'answers', foreignKey: 'quizSessionId' });
db.answer.belongsTo(db.answer, { as: 'quizSession', foreignKey: 'quizSessionId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
