module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('Question', {
      quizId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sectionId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      questionType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }); 
    return Question;
  };
  