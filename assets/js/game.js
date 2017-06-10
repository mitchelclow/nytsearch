function displayMovieInfo() {
        var search = $(this).attr("data-name");
        var ipaKey = "f6bc7c8965ae47389489fd1b36d49e09"
        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q="' + search +'"&api-key=' + ipaKey;
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	console.log(response);
        }