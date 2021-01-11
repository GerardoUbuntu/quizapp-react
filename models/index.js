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
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.user = require('./User')(sequelize, Sequelize.DataTypes);
db.quiz = require('./Quiz')(sequelize, Sequelize.DataTypes);
db.question = require('./Question')(sequelize, Sequelize.DataTypes);
db.section = require('./Section')(sequelize, Sequelize.DataTypes);
db.answer = require('./Answer')(sequelize, Sequelize.DataTypes);
db.choice = require('./Choice')(sequelize, Sequelize.DataTypes);




db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
