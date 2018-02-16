module.exports = function(sequelize, DataTypes){
  const user = sequelize.define('user', {
    name: {type: DataTypes.STRING}
  });

  return user;
}