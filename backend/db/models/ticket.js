'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
  };
  return Ticket;
};