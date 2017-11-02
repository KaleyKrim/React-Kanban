module.exports = function(sequelize, DataTypes){
  const status = sequelize.define('status', {
    title: {type: DataTypes.STRING}
  });

  status.associate = function(models){

    status.hasMany(models.card, {
      foreignKey: 'status'
    });
  };
  return status;
};