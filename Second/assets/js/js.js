/**
 * Created by Panda on 30/11/2017.
 */


$(document).ready(() => {


    GetData();

    console.log("test");

    $("#container").append("<p>test</p>");

});

function GetData() {

    $.ajax({
        url: "http://cunning-convoys.azurewebsites.net/api/cities",
        context: document.body
    }).done(function() {
        $( "#container").append( result );
    });

}



function LoadData() {
    return "test";
}
