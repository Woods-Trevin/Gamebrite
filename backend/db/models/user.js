'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [4, 50]
      },
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [4, 50]
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
    {
      // defining model scope to prevent certain fields from 
      // being sent in a query
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
      }
    });
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Event, { foreignKey: "hostId" });

    const columnMapping = {
      through: "Ticket",
      otherKey: "eventId",
      foreignKey: "userId"
    }
    User.belongsToMany(models.Event, columnMapping)

    const columnMapping2 = {
      through: "Bookmark",
      otherKey: "eventId",
      foreignKey: "userId"
    }
    User.belongsToMany(models.Event, columnMapping2)
  };

  // Creating methods that the API routes for authentication 
  // will use to interact with the Users table.

  // This method will return an object with only the User 
  // instance information that is safe to save to a JWT.
  User.prototype.toSafeObject = function () { // remember, this cannot be an arrow function
    const { id, username, email } = this; // context will be the User instance
    return { id, username, email };
  };

  // accept a password string and return true if there is a match 
  // with the User instance's hashedPassword, otherwise it will return
  // false
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  // Function uses the currentUser scope to return a User with that id
  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  // User.login() will accept an object with a credential and password key. 
  // The method should search for one User with the specified credential,
  // (a username or an email). If a user is found, then validate the 
  // password by passing it into the instance's .validatePassword method.
  // If the password is valid, then return the user by using the currentUser
  // scope.
  User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  // Accepts an object with a username, email and password key. 
  // Hash the password using bcryptjs package's hashSync method. 
  // Create a User with the username, email, and hashedPassword. 
  // Return the created user using the currentUser scope.
  User.signup = async function ({ firstname, lastname, username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstname,
      lastname,
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };

  return User;
};