module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Section;
};
