'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to one user
      accounts.belongsTo(models.users, {
        as: "users",
        foreignKey: "userId",
      });
      // has many transactions
      accounts.hasMany(models.transactions, {
        as: "transactions",
        foreignKey: "accountId",
      });
    }
  }
  accounts.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'accounts',
  });
  return accounts;
};