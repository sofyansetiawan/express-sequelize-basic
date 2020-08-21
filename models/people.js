'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  People.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    ismale: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};