const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  { timestamps: false });
  
  Users.associate = (models) => {
    Users.hasMany(models.BlogPost,
      { foregnKey: 'id', as: 'blogposts' });
  };

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'id', as: 'blogposts' });
  };

  return Users;
};

module.exports = User;