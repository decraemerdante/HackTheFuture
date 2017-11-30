/**
 * Created by Panda on 30/11/2017.
 */

var cities;
var convoys;



$(document).ready(function () {
    getCities();
    getConvoys();




});

function getCities() {

    $.ajax({

        url: 'http://cunning-convoys.azurewebsites.net/api/Cities',
        type: "GET",
        dataType: "json",
        data: {
            format: "json"
        },
        success: function (data) {

            cities = data;
            updateCitiesView();

        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }
    });
}
function getConvoys() {
    $.ajax({

        url: 'http://cunning-convoys.azurewebsites.net/api/convoys',
        type: "GET",
        dataType: "json",
        data: {
            format: "json"
        },
        success: function (data) {
            convoys = data;
            updateConvoysView();
        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }
    });
}


function updateCitiesView(){

    $("#container").append("<ul class='test'></ul>");
    cities.forEach(function (city) {
        $(".test").append("<li>" + city.name + "</li>");
    })
}

function updateConvoysView() {
    return "test";
}
