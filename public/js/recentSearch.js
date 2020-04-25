$(document).ready(function(){

    $.get("/api/recentSearches").then(function(data) {
        // $(".member-name").text(data.email);
      });
    
})