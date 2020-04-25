$(document).ready(function(){

    var addDrinkForm = $("form.addDrink");
    var cocktailName = $("input#cocktailName-input")
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
    cocktailName: cocktailName.val().trim(), 
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
    cocktailName.val("")
    ingOneInput.val("");  
    ingOneOzInput.val("");  
    ingTwoInput.val("");  
    ingTwoOzInput.val("");  
    ingThreeInput.val("");  
    ingThreeOzInput.val("");  
    ingFourInput.val("");  
    ngFourOzInput.val(""); 
    notesInput.val(""); 
});

function createDrink(newDrink){
    $.post("/api/addDrinks", {
        ...newDrink
    }).then(function(data){
        window.location.replace("/addedDrinks"); 
    }).catch(err); 
}

}); 