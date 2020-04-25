$(document).ready(function(){

var drinkSearch = $(".drinkSearch"); 
var recentSearch = $(".recentSearch"); 
var addDrink = $(".addDrink"); 


drinkSearch.click(function(event){
event.preventDefault(); 
window.location.href = 'drinkSearch.html'; 
}); 

recentSearch.click(function(event){
event.preventDefault(); 
window.location.href = 'recentSearch.html'; 
}); 

addDrink.click(function(event){
 event.preventDefault(); 
 window.location.href = 'addDrink.html';    
}); 
}); 