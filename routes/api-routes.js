// Requiring our models and passport as we've configured it
var db = require("../models");
const { Op } = require("sequelize");
module.exports = function(app) {
  app.post("/api/drinks", function(req, res) {
    db.drink.create({
    drinkName: req.body.drinkName,
    ingOne: req.body.ingOne,
    ingOneOz: req.body.ingOneOz,
    ingTwo: req.body.ingTwo,
    ingTwoOz: req.body.ingTwoOz,
    ingThree: req.body.ingThree,
    ingThreeOz: req.body.ingThreeOz,
    ingFour: req.body.ingFour,
    ingFourOz: req.body.ingFourOz,
    drinkNotes: req.body.drinkNotes
    }).then(function(dbDrink) {
      res.json(dbDrink);
      console.log(dbDrink)
    });
  });
  app.get("/api/drinks", function(req, res) {
    db.drink.findAll({}).then(function(dbDrink){
      res.json(dbDrink);
    });
  });
  app.get("/api/recentlyAdded", function(req,res){
    db.drink.findAll({
      limit: 5,
      order: [ [ 'id', 'DESC' ]]
    }).then(function(entries){
     res.json(entries)
    });
    });
  app.get("/api/:searchedDrink", function(req, res) {
   console.log(req.params.searchedDrink)
    db.drink.findAll({
      where: {
      [Op.or]: [
        {drinkName: req.params.searchedDrink},
       {ingOne: req.params.searchedDrink}
      ]
      }
    }).then(function(dbSearch) {
      console.log(dbSearch)
      res.json(dbSearch);
    });
  });