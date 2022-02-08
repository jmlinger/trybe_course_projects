const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  }, 
  { timestamps: false });
  
  return Users;
};

module.exports = User;