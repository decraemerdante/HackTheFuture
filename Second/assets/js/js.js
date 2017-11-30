/**
 * Created by Panda on 30/11/2017.
 */

var cities;
var convoys;



$(document).ready(function () {

    $("nav").on("click", "div.HomeLink" ,function () {
        location.reload();
    });
    $("nav").on("click", "div.UpdateLink" ,function () {
        getCities();
        getConvoys();
    });


    initPage();
    getCities();
    getConvoys();

});

function initPage() {
    $("nav").append("")
}

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
            updateView('cities');

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
            updateView('convoys');
        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }
    });
}


function updateView(type){

    $("#container").append("<ul class='" + type + "'></ul>");
    var data;
    switch(type){
        case 'cities' :
            data = cities;
            break;
        case 'convoys' :
            data = convoys;
            break;

    }
    data.forEach(function (item) {
        $("." + type + "").append("<li>" + item.name + "</li>");
    })
}

function updateConvoysView() {
    $("#container").append("<ul class='conoys'></ul>");
    cities.forEach(function (convoy) {
        $(".convoys").append("<li>" + city.name + "</li>");
    })
}
