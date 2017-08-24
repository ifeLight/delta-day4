
var converter = new showdown.Converter();


$(document).ready(function () {
    $("#input1").keyup(function (e) { 
        
        $("#display").text( converter.makeHtml(e.target.value));
    });
});