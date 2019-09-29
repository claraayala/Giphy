$(function() {
    populateButton(searchArray,`searchButton`,`#buttonArea`)
    console.log("Page Loaded");

})
var searchArray = ['mean girls','shocked','oh well'];

function populateButton(searchArray,classToAdd,areaToAddto){
    $(areaToAddTo).empty();
    for(var i=0;i<searchArray.length;i++){
        var a = $(`<button>`);
        a.addClass(classToAdd);
        a.attr(`data-type`,searchArray[i]);
        a.text(searchArray[i]);
        $(areaToAddto).append(a);
    }

}

