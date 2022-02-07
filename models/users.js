// eslint-disable-next-line max-lines-per-function
const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.NUMBER,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, 
  { timestamps: false });
  
  return Users;
};

module.exports = User;