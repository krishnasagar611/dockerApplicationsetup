module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      Name: {
        type: Sequelize.STRING
      }
    });
    return User;
  };