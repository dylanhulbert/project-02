$(document).ready(function () {



    function displayNewDrink() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id')
        $.ajax({

            'url': `/api/drinks/${id}`,
            'type': 'GET'
        }).then(function(data) {
        console.log(data);
        var newTr = $("<tr>");
        newTr.append("<td>" + data.drinkName + "</td>");
        newTr.append("<td>" + "1. " + data.ingOneOz + "oz " + "of" + data.ingOne + "</td>");

        if (!data.ingTwoOz && !data.ingTwo) {
            newTr.append("<td>" + "2. " + data.ingTwoOz + "oz " + "of" + data.ingTwo + "</td>");
        }
        if (!data.ingThreeOz && !data.ingThree) {
            newTr.append("<td>" + "3. " + data.ingThreeOz + "oz " + "of" + data.ingThree + "</td>");
        }
        if (!data.ingFourOz && !data.ingFour) {
            newTr.append("<td>" + "4. " + data.ingFourOz + "oz " + "of" + data.ingFour + "</td>");
        }
        if (!data.drinkNotes) {
            newTr.append("<td>" + "Notes: " + data.drinkNotes + "</td>");
        }
        console.log(newTr)
        $("#results").append(newTr); 
    }); 
    }

displayNewDrink(); 

})