$(function(){
    populateButtons(searchArray,'searchButton','#buttonsArea')
    console.log("Page Loaded");

})
var searchArray = ['meangirls','shocked','ohwell'];

function populateButtons(searchArray,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0;i<searchArray.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddTo).append(a);
    }

}

$(document).on('click','.searchButton',function(){
    var type=$(this).data('type');
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+type+'api_key=r9JZxQMtA0s4YFo65dH1qXzLy6wsT86D&q=&limit=25&offset=0&rating=G&lang=en';
    $.ajax({url:queryURL,method:'GET'})
    .done(function(response){
        for(var i =0;i<response.data.length;i++){
            var searchDiv = $('<div class="search-item">');
            var rating = response.data[i].rating;
            var p = $('<p>').text('Rating: ',+rating);
            var animated = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;
            var image = $('<img>');
            image.attr('src',still);
            image.attr('data-still',still);
            image.attr('data-animated',animated);
            image.attr('data-state','still');
            image.addClass('searchImage');
            searchDiv.append(p);
            searchDiv.append(image);
            $('#searches').append(searchDiv);

        }
    })
})

