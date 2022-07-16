'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to one user
      transactions.belongsTo(models.users, {
        as: "users",
        foreignKey: "userId",
      });
      // belongs to one account
      transactions.belongsTo(models.accounts, {
        as: "accounts",
        foreignKey: "accountId",
      });
      // belongs to one category
      transactions.belongsTo(models.categories, {
        as: "categories",
        foreignKey: "categoryId",
      });
    }
  }
  transactions.init({
    userId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    amount: DataTypes.INTEGER,
    type: DataTypes.STRING,
    accountId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};