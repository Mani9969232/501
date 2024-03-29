'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  matches.init({
    sport: DataTypes.STRING,
    admin: DataTypes.STRING,
    match: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    teamsize: DataTypes.INTEGER,
    venue: DataTypes.STRING,
    timein: DataTypes.STRING,
    timeout: DataTypes.STRING,
    reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matches',
  });
  return matches;
};