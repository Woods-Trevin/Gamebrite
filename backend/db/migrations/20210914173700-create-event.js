'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imageURL: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      game: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      organizer: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      gameType: {
        allowNull: false,
        type: Sequelize.STRING(15)
      },
      startDate: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      endDate: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      ticketsCapacity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      startTime: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      endTime: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      onlineEventUrl: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categories"
        }
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users"
        }
      },
      venueId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Venues"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Events');
  }
};