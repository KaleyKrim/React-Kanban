module.exports = function(sequelize, DataTypes){
  const card = sequelize.define('card', {
    title: {type: DataTypes.STRING, allowNull: false}
  });

  // card.associate = function(models){
  //   card.belongsTo(models.status, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       name: 'status'
  //     }
  //   });
  // };
  return card;
}