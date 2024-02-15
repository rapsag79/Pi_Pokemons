const { DataTypes, UUIDV4, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  vida: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ataque: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  defensa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  velocidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  altura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  peso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created: {
    type: DataTypes.BOOLEAN,
    defaulValue: true
  }
},
    { timestamps: false }
  );
};
