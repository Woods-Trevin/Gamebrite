'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define('Venue', {
    name: DataTypes.STRING(50),
    address: DataTypes.STRING(25),
    city: DataTypes.STRING(15),
    state: DataTypes.STRING(10),
    zipcode: DataTypes.INTEGER
  }, {});
  Venue.associate = function (models) {
    // associations can be defined here
    Venue.hasMany(models.Event, { foreignKey: "venueId" })
  };
  return Venue;
};