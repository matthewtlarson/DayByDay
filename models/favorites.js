const { Model, DataTypes } = require('sequelize')
const sequalize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quote: {
      type: DataTypes.STRING,
      allowNull: false,
    },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'profile',
          key: id,
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites'
  }
);

module.exports = Favorites;