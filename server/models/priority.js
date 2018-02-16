module.exports = function(sequelize, DataTypes){
  const priority = sequelize.define('priority', {
    title: {type: DataTypes.STRING}
  });

  priority.associate = function(models){

    priority.hasMany(models.card, {
      foreignKey: 'priority'
    });
  };
  return priority;
};