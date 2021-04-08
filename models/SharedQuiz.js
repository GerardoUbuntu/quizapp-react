module.exports = (sequelize, DataTypes) => {
    const SharedQuiz = sequelize.define('SharedQuiz', {
      sharedQuizId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
    return SharedQuiz;
  };
  