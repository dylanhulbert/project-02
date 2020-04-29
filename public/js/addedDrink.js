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
        newTr.append(data.drinkName);
        newTr.append("<br>" + data.ingOneOz + " oz " + "of " + data.ingOne);

        if (data.ingTwoOz && data.ingTwo) {
            newTr.append("<br>" + data.ingTwoOz + " oz " + "of " + data.ingTwo);
        }
        if (data.ingThreeOz && data.ingThree) {
            newTr.append("<br>" + "3. " + data.ingThreeOz + " oz " + "of " + data.ingThree);
        }
        if (data.ingFourOz && data.ingFour) {
            newTr.append("<br>" + "4. " + data.ingFourOz + " oz " + "of " + data.ingFour);
        }
        if (data.drinkNotes) {
            newTr.append("<br>" + data.drinkNotes);
        }
        console.log(newTr)
        $("#results").append(newTr); 
    }); 
    }

displayNewDrink(); 

})