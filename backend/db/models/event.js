'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    imageURL: DataTypes.STRING(100),
    title: DataTypes.STRING(200),
    game: DataTypes.STRING(30),
    organizer: DataTypes.STRING(50),
    description: DataTypes.STRING(500),
    gameType: DataTypes.STRING(15),
    startDate: DataTypes.STRING(20),
    endDate: DataTypes.STRING(20),
    ticketsCapacity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    startTime: DataTypes.STRING(10),
    endTime: DataTypes.STRING(10),
    onlineEventUrl: DataTypes.STRING(75),
    categoryId: DataTypes.INTEGER,
    hostId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER
  }, {});
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.Category, { foreignKey: "categoryId" });
    Event.belongsTo(models.Venue, { foreignKey: "venueId" });
    Event.belongsTo(models.User, { foreignKey: "hostId" });

    const columnMapping = {
      through: "Ticket",
      otherKey: "userId",
      foreignKey: "eventId"
    }

    Event.belongsToMany(models.User, columnMapping)

    const columnMapping2 = {
      through: "Bookmark",
      otherKey: "userId",
      foreignKey: "eventId"
    }
    // Event.belongsToMany(models.User, columnMapping2);
  };
  return Event;
};