'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // has many transactions
      users.hasMany(models.transactions, {
        as: "transactions",
        foreignKey: {
          name: "userId",
        },
      });

      // has many categories
      users.hasMany(models.categories, {
        as: "categories",
        foreignKey: {
          name: "userId",
        },
      });

      // has many accounts
      users.hasMany(models.accounts, {
        as: "accounts",
        foreignKey: {
          name: "userId",
        },
      });
    }
  }
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};