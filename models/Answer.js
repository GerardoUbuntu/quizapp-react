module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('Answer', {
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      choiceId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quizSessionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    });
    return Answer;
  };
  