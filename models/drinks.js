
module.exports = function(sequelize, DataTypes) {
  var drink = sequelize.define("drink", {
    // The email cannot be null, and must be a proper email before creation
    cocktailName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingOne: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    ingOneOz: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    }, 
    ingTwo: {
      type: DataTypes.STRING
    }, 
    ingTwoOz: {
      type: DataTypes.DECIMAL
    }, 
    ingThree: {
      type: DataTypes.STRING
    }, 
    ingThreeOz: {
      type: DataTypes.DECIMAL
    }, 
    ingFour: {
      type: DataTypes.STRING
    }, 
    ingFourOz: {
      type: DataTypes.STRING
    },
    freezeTableName: true 
    
  });
 
 
  return drink;
};
