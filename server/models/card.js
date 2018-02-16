module.exports = function(sequelize, DataTypes){
  const card = sequelize.define('card', {
    title: { type: DataTypes.STRING, allowNull: false },
    points: { type: DataTypes.INTEGER, defaultValue: 0 },
    photo_url: { type: DataTypes.STRING, allowNull: true },
    deleted_at: { type: DataTypes.DATEONLY, defaultValue: null }
  });

  card.associate = function(models){
    card.belongsTo(models.status, {
      foreignKey: 'status',
      as: 'Status'
    });
  };

  return card;
}