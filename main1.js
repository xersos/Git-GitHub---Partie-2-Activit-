var boxcontainer = document.getElementById("Type");
var api1Request = new XMLHttpRequest();
api1Request.open('GET', 'http://145.239.32.254:8081/pokemon/types');
api1Request.onload = function () {
    "use strict";
    if (api1Request.status >= 200 && api1Request.status < 400) {
        var api1Data = JSON.parse(api1Request.responseText);
        api1Data.sort(function(a,b){return a.id-b.id});
        renderHTML(api1Data);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }

    
};

api1Request.onerror = function () {
    "use strict";
    console.log("Connection error");
};

api1Request.send();

function renderHTML(data) {
    var htmlString = "";
    
    
    
    for (i = 0; i < data.length; i++) {
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12'><div class='row product-part'><div class='col-md-12 col-sm-12 col-xs-12 product-title'><h1>Nom : " + data[i].nom + " .</h1></div>";
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12 product-description'><p> id : " + data[i].id + "</p></div>";
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12 product-cart'><div class='row'><div class='col-md-6 col-sm-12 col-xs-6'><p> Caractéristique :  " + data[i].caractéristique + ".</p></div>";
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12 product-cart'><div class='row'><div class='col-md-6 col-sm-12 col-xs-6'><p> Attaques : " + data[i].attaques + "</p></div>";
        
        boxcontainer.insertAdjacentHTML("beforeend", htmlString);
        htmlString = "";
    }
}
