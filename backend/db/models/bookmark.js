'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Bookmark.associate = function (models) {
    // associations can be defined here
    // Bookmark.hasMany(models.Event, { foreignKey: "eventId" })
    // Bookmark.hasMany(models.User, { foreignKey: "userId" })
  };
  return Bookmark;
};