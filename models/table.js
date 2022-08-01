const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Table extends Model {}

Table.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_added: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    physical_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    emotional_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spiritual_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mental_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    social_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    overall_rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'profile',
        key: 'id',
      },
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'table',
  }
);

module.exports = Table;