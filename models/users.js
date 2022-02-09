const User = (sequelize, DataTypes) => {
  const Users = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  { timestamps: false });

  // seria necessário fazer essa associação caso houvesse aqui uma chave com blogposts.
  Users.associate = (models) => {
    Users.hasMany(models.BlogPost,
      { foreignKey: 'id', as: 'blogposts' });
  };

  return Users;
};

module.exports = User;