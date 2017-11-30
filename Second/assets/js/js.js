/**
 * Created by Panda on 30/11/2017.
 */
var cities;

$(document).ready(function () {
    GetData();
    showCityNames();

    console.log("test");

    $("#container").append("<p>test</p>");
});

function GetData() {

    $.ajax({

        url: 'http://cunning-convoys.azurewebsites.net/api/Cities',
        type: "GET",
        dataType: "json",
        data: {
            format: "json"
        },
        success: function (data) {
          cities = data;
        },
        error: function (xhr, message) {
            console.log(xhr, message);
        }

    });

}

function showCityNames(){
    $("#container").append("<ul class='test'></ul>");
    cities.forEach(function (city) {
        $(".test").append("<li>" + city.name + "</li>");
    })
}

function LoadData() {
    return "test";
}
