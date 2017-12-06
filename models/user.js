module.exports = function(sequelize, DataTypes){
  const user = sequelize.define('user', {
    name: {type: DataTypes.STRING}
  });

  user.associate = function(models){
    user.hasMany(models.card, {
      foreignKey: 'assigned_to', as: 'Tasks'
    });
  };

  return user;
}