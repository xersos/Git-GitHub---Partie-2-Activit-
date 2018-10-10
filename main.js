//La méthode getElementById() de Document renvoie un objet Element qui est représenté par une id correspond à la chaîne de caractères spécifiée. Les ID d'élément doivent être uniques, permet d'accéder rapidement à un élément spécifique. //

var boxcontainer = document.getElementById("pokemon");
//XMLHttpRequest est un objet JavaScript. Utiliser pour récupérer facilement des données via HTTP.//
var api1Request = new XMLHttpRequest();
//Permet de récupérer notre Api//
api1Request.open('GET', 'http://145.239.32.254:8081/pokemon/pokemons');
//Si l'api est chargé avec succès celle-ci nous affiche notre fonction//
api1Request.onload = function () {
    //Entre 200 et 400 la fonction est correct et bien affiché, de 400 à plus c'est une erreur//
    if (api1Request.status >= 200 && api1Request.status < 400) {
        //Json est une requete http qui nous permet de lire des données et de les afficher sur notre page web//
        var api1Data = JSON.parse(api1Request.responseText);
        renderHTML(api1Data);
    } else {
        //si notre requete ne fonctionne pas nous serrons averti par le message suivant//
        console.log("We connected to the server, but it returned an error.");
    }
    
};

api1Request.onerror = function () {
    
    console.log("Connection error");
};

api1Request.send();

function renderHTML(data) {
    //initialisation de notre variable htmlString//
    var htmlString = "";
    
    //notre boucle qui va lire les données de l'api et les afficher dans la box grace au htmlString qui est une chaine// 
    for (i = 0; i < data.length; i++) {
        htmlString += "<div class='col-md-4 col-sm-4 col-xs-12'><div class='row product-part'><div class='col-md-12 col-sm-12 colxs-12 img-section'><img class='imgbox' src= '" + data[i].image + "'></div>";
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12 product-title'><h1>" + data[i].nom + " </h1></div>";
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12 product-description'><p>" + data[i].numero + "</p></div>";
        htmlString += "<div class='col-md-12 col-sm-12 col-xs-12 product-cart'><div class='row'><div class='col-md-6 col-sm-12 col-xs-6'><p> " + data[i].type + "</p></div>";
        htmlString += "<div class='col-md-6 col-sm-12 col-xs-6 text-right product-add-cart'><a href='API%202.html' class='btn btn-success'>Spécialisation</a></div>";
        //Analyse et insert les noeuds dans le DOM à la position spécifié'beforeend' : Juste à l'intérieur de l'element , après son dernier enfant.//
        boxcontainer.insertAdjacentHTML("beforeend", htmlString);
        //fermeture de notre boucle//
        htmlString = "";
    }
}

 
        
    
 