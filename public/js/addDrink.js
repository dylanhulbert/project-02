$(document).ready(function(){

    var addDrinkForm = $("form#addDrink");
    var drinkName = $("input#drinkName-input")
    var ingOneInput = $("input#ingOne-input");
    var ingOneOzInput = $("input#ingOneOz-input");
    var ingTwoInput = $("input#ingTwo-input");
    var ingTwoOzInput = $("input#ingTwoOz-input");
    var ingThreeInput = $("input#ingThree-input");
    var ingThreeOzInput = $("input#ingThreeOz-input");
    var ingFourInput = $("input#ingFour-input");
    var ingFourOzInput = $("input#ingFourOz-input");
    var notesInput = $("input#notes-input"); 


addDrinkForm.on("submit", function(event){
event.preventDefault(); 
var newDrink = {
    drinkName: drinkName.val().trim(), 
    ingOne: ingOneInput.val().trim(), 
    ingOneOz: ingOneOzInput.val().trim(), 
    ingTwo: ingTwoInput.val().trim(), 
    ingTwoOz: ingTwoOzInput.val().trim(), 
    ingThree: ingThreeInput.val().trim(), 
    ingThreeOz: ingThreeOzInput.val().trim(), 
    ingFour: ingFourInput.val().trim(), 
    ingFourOz: ingFourOzInput.val().trim(),
    drinkNotes: notesInput.val().trim()
}; 

createDrink(newDrink); 
    drinkName.val("")
    ingOneInput.val("");  
    ingOneOzInput.val("");  
    ingTwoInput.val("");  
    ingTwoOzInput.val("");  
    ingThreeInput.val("");  
    ingThreeOzInput.val("");  
    ingFourInput.val("");  
    ingFourOzInput.val(""); 
    notesInput.val(""); 
    
});


function createDrink(newDrink){
    $.post("/api/drinks", {
        ...newDrink
      
    }).then(function(newDrink){
        console.log("This is your new drink" +  newDrink)
        window.location.replace(`addedDrinks.html?id=${newDrink.id}`); 
    }).catch(function(err){
        if (err) throw err; 
    }); 
}

}); 