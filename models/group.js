module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    upadatedAt: 'updated_at'
  });

  return Group;
};
