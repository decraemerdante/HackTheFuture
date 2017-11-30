/**
 * Created by Panda on 30/11/2017.
 */

var cities;
$(document).ready(function () {
    getCities();





    $("#container").append("<p>test</p>");
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
         showCityNames(data)
        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }

    });

}

function showCityNames(cities){
    $("#container").append("<ul class='test'></ul>");
    cities.forEach(function (city) {
        $(".test").append("<li>" + city.name + "</li>");
    })
}

function LoadData() {
    return "test";
}
