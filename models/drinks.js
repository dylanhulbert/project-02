
module.exports = function(sequelize, DataTypes) {
  var drink = sequelize.define("drink", {
  
    drinkName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingOne: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    ingOneOz: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    ingTwo: {
      type: DataTypes.STRING
    }, 
    ingTwoOz: {
      type: DataTypes.STRING
    }, 
    ingThree: {
      type: DataTypes.STRING
    }, 
    ingThreeOz: {
      type: DataTypes.STRING
    }, 
    ingFour: {
      type: DataTypes.STRING
    }, 
    ingFourOz: {
      type: DataTypes.STRING
    }, 
    drinkNotes: {
      type: DataTypes.STRING
    }},
    {
    freezeTableName: true 
    }
  );
 
 
  return drink;
};
