$(document).ready(function(){

var drinkSearch = $("#drinkSearch"); 
var recentSearch = $("#recentSearch"); 
var addDrink = $("#addDrink"); 
var homePage = $("#homePage"); 



addDrink.click(function(event){
 event.preventDefault(); 
 window.location.href = 'add-drink.html';    
}); 

homePage.click(function(event){
    event.preventDefault(); 
    window.location.href = 'index.html';    
   }); 
}); 