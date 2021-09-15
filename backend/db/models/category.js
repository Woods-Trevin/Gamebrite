'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    type: DataTypes.STRING(20)
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.hasMany(models.Event, { foreignKey: "categoryId" })
  };
  return Category;
};