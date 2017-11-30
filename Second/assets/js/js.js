/**
 * Created by Panda on 30/11/2017.
 */


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

        url: 'http://cunning-convoys.azurewebsites.net/api/Convoys',
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

    var data;
    switch(type){
        case 'cities' :
            data = cities;
            updateCities(data,type);
            break;
        case 'convoys' :
            data = convoys;
            updateConvoy(data,type);
            break;

    }

}

function calculateRelativePopulation(data) {

    var returnValue = [];
    var total = 0;
    data.forEach(function (city) {
        total += city.population;
    });

    console.log(total);

    data.forEach(function (city) {

        returnValue[city.name] = (city.population/total);
    });

    console.log(returnValue);
    return returnValue;
}

function updateCities(data,type) {

    //data =  '[{"id":"0e4c36f9-5227-4308-ae08-e5e3cfc820a2","name":"Tokyo/Yokohama","population":33200918,"area":6993,"country":"Japan"},{"id":"5a3dadb9-e07f-475d-be71-24270ee72aaa","name":"New York Metro","population":17801462,"area":8683,"country":"USA"},{"id":"3acf04ac-843f-45a9-a477-3ebfb8fc50c7","name":"Sao Paulo","population":17701053,"area":1968,"country":"Brazil"},{"id":"d6acf961-db20-4910-950f-c21c657354c2","name":"Seoul/Incheon","population":17501375,"area":1049,"country":"South Korea"},{"id":"f795f8d2-0c4a-40bf-a37e-94914970e7ed","name":"Mexico City","population":17401035,"area":2072,"country":"Mexico"},{"id":"feda2c91-062d-4660-bdd9-f3cc83b62b87","name":"Osaka/Kobe/Kyoto","population":16425841,"area":2564,"country":"Japan"},{"id":"c4e82e30-ae88-4707-aa02-1b76d230ebcb","name":"Manila","population":14751251,"area":1399,"country":"Philippines"},{"id":"f6e1c37a-d1bf-412a-9b94-4788d2c1bddc","name":"Mumbai","population":14351302,"area":484,"country":"India"},{"id":"a51d5e35-c3dc-4490-87f9-b231a7cb4dfb","name":"Delhi","population":14301329,"area":1295,"country":"India"},{"id":"16cdd352-7ce8-4643-a378-7aa927ecdc3c","name":"Jakarta","population":14250730,"area":1360,"country":"Indonesia"},{"id":"e762d9a0-f548-4a86-9c02-d9ae5482a4b5","name":"Lagos","population":13401048,"area":738,"country":"Nigeria"},{"id":"f15e0599-283b-4eb2-8f65-1b85e4990b4c","name":"Kolkata","population":12701339,"area":531,"country":"India"},{"id":"70b58568-b51c-40c4-82c2-65446db9765a","name":"Cairo","population":12201058,"area":1295,"country":"Egypt"},{"id":"7b33a55f-43b5-4155-8bf8-93261f2b596b","name":"Los Angeles","population":11790545,"area":4320,"country":"USA"},{"id":"3488c883-7a42-45d4-83bc-d1ed5a71715a","name":"Buenos Aires","population":11201561,"area":2266,"country":"Argentina"},{"id":"7f7a523c-6dd4-4215-a6b6-2b94872c8da6","name":"Rio de Janeiro","population":10801212,"area":1580,"country":"Brazil"},{"id":"5b443f20-e33d-4559-87e1-a32d3c9c9f44","name":"Moscow","population":10501086,"area":2150,"country":"Russia"},{"id":"b7ceeb65-8b8c-4110-a2f3-5b5885adfb58","name":"Shanghai","population":10001117,"area":746,"country":"China"},{"id":"5d7c7d1e-6819-441e-bafe-0f6d33b41cf2","name":"Karachi","population":9801099,"area":518,"country":"Pakistan"},{"id":"8c231434-8a14-48f7-81fe-f9cd06578531","name":"Paris","population":9646097,"area":2723,"country":"France"},{"id":"7215410a-c1fd-448f-8bb5-16bae92be782","name":"Istanbul","population":9001034,"area":1166,"country":"Turkey"},{"id":"d055b4b3-918c-4ed2-904a-942744ddaf85","name":"Nagoya","population":9001287,"area":2875,"country":"Japan"},{"id":"e592c691-f259-4609-beeb-74ef1b1c6505","name":"Beijing","population":8615430,"area":748,"country":"China"},{"id":"235db057-5ea6-4441-886d-4e5ae92849d8","name":"Chicago","population":8308943,"area":5498,"country":"USA"},{"id":"42282ce0-078c-4194-8253-fa789b7dfff3","name":"London","population":8279360,"area":1623,"country":"UK"}]';


    var percentages = calculateRelativePopulation(data);


   var cityview = "<div>";


    cityview += type;
    var chartTable = [];
    data.forEach(function (city) {
        chartTable.push([city.name, percentages[city.name]]);
    });

    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(function () {
        var circle = new google.visualization.DataTable();
        circle.addColumn('string', 'City');
        circle.addColumn('number', 'Percentage');
        circle.addRows(chartTable);


        var options = {
            'title': 'Relative Population',
            'width': 1200,
            'height': 800
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));

        function selectHandler() {
            var selectedItem = chart.getSelection()[0];
            if (selectedItem) {
               convoyDetails(circle.getValue(selectedItem.row, 0));
            }
        }

        // Listen for the 'select' event, and call my function selectHandler() when
        // the user selects something on the chart.
        google.visualization.events.addListener(chart, 'select', selectHandler);

        chart.draw(circle, options);

    });




   // data.forEach(function (city) {

      //  console.log(percentages[city.name]);
      //  cityview +=


      //  "<div class='cityViewBlock'>" +

      //  "<a href ='#'  class='cityClick'><p id='" + city.name + "'>" + city.name + ", " + city.country +"</p></a>"+
      //  "<p>" + city.name + "</p>"+
      //  "<p>" + percentages[city.name] + "</p>" +
      //  "<p>" + city.population + "</p>"+

      //  "</div>"






   // });

    cityview += "</div>";



    $(".cities").replaceWith(cityview);


$(".cityClick").on('click', convoyDetails);
}

function updateConvoy(data,type) {

}


function convoyDetails(city) {

//console.log(e);
    //var city  = e.target.id;

    var incoming = convoys.filter((function (item) {
        if(item.destinationCity == city){
            return item;
        }
    }));

    console.log(incoming);



    var NW = [];
    var N = [];
    var NE = [];
    var W = [];
    var E = [];
    var SE = [];
    var S = [];
    var SW =[];

    incoming.forEach(function (convoy) {
        switch(convoy.origin){
            case "SouthEast" :
                SE.push(convoy);
                break;
            case"South" :
                S.push(convoy);
                break;
            case"SouthWest" :
                SW.push(convoy);
                break;
            case "North" :
                N.push(convoy);
                break;
            case "NorthEast":
                NE.push(convoy);
                break;
            case "NorthWest" :
                NW.push(convoy);
                break;
            case "West":
                W.push(convoy);
                break;
            case "East" :
                E.push(convoy);
                break;

        }
    });

console.log(SE);
    console.log(SW);
    console.log(S);
    console.log(N);
    console.log(NE);
    console.log(NW);
    console.log(E);
    console.log(W);
    $(".SE").html(SE.length);
    $(".SW").html(SW.length);
    $(".S").html(S.length);
    $(".W").html(W.length);
    $(".E").html(E.length);
    $(".N").html(N.length);
    $(".NE").html(NE.length);
    $(".NW").html(NW.length);
    $(".CENTER").html(city);








    
}
