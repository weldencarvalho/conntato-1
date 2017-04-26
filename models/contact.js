module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    firtsName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,

    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    photograph: {
      type: DataTypes.STRING,
      
    }


  }, {
    timestamps: true,
    createdAt: 'created_at',
    upadatedAt: 'updated_at'
  });
  return Contact;
};
