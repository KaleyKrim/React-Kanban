module.exports = function(sequelize, DataTypes){
  const user = sequelize.define('user', {
    name: {type: DataTypes.STRING}
  });

  user.associate = function(models){
    user.hasMany(models.card, {
      foreignKey: {
        name: 'assigned_to'
      }
    });
  };

  return user;
}