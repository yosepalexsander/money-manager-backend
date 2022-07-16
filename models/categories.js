'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to one user
      categories.belongsTo(models.users, {
        as: "users",
        foreignKey: "userId",
      });
      // has many transactions
      categories.hasMany(models.transactions, {
        as: "transactions",
        foreignKey: "categoryId",
      });
    }
  }
  categories.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'categories',
  });
  return categories;
};