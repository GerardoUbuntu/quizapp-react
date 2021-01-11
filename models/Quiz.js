module.exports = (sequelize, DataTypes) => {
    const Quiz = sequelize.define('Quiz', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quizType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      schedule: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      currentQuestion: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      background: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      withSections: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
  
    return Quiz;
  };
  