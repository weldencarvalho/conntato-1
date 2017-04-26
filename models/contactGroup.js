module.exports = (sequelize, DataTypes) => {
  let ContactGroup = sequelize.define('ContactGroup', {
  }, {
    classMethods: {
      associate(Models){
        ContactGroup.belongsTo(Models.Contact, {
          foreignKey: 'contact_id'
        });
        ContactGroup.belongsTo(Models.Group, {
          foreignKey: 'group_id'
        });
      }
    }

  });
  return ContactGroup;
};
