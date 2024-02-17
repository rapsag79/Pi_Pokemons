const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},
  { timestamps: false }
  );
};
