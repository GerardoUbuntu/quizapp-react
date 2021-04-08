module.exports = (sequelize, DataTypes) => {
  const QuizSession = sequelize.define('QuizSession', {
    sharedQuizId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  });
  return QuizSession;
};
