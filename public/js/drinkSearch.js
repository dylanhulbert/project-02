

var drinkSearch = $("input#drinkSearch"); 
var drinkForm = $("form#drinkForm")

drinkForm.on("submit", function(event){
event.preventDefault(); 

var searchedDrink = $("#drinkSearch").val().trim(); 
window.location.href = `results.html?search=${searchedDrink}`
}); 



function renderDrink(result){
  
    result.forEach(function(data){
        var newTr = $("<tr>");
        newTr.append(data.drinkName);
        newTr.append("<br>" + data.ingOneOz + " oz " + "of " + data.ingOne);

        if (data.ingTwoOz && data.ingTwo) {
            newTr.append("<br>" + data.ingTwoOz + " oz " + "of " + data.ingTwo);
        }
        if (data.ingThreeOz && data.ingThree) {
            newTr.append("<br>" + data.ingThreeOz + " oz " + "of " + data.ingThree);
        }
        if (data.ingFourOz && data.ingFour) {
            newTr.append("<br>" + data.ingFourOz + " oz " + "of " + data.ingFour);
        }
        if (data.drinkNotes) {
            newTr.append("<br>" + data.drinkNotes);
        } 
       
        newTr.append("<br><br>")
        $("#searched").append(newTr); 
    })

}; 


