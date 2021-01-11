module.exports = (sequelize, DataTypes) => {
    const Choice = sequelize.define('Choice', {
      questionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });
    return Choice;
  };
  