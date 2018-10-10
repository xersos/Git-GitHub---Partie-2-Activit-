<!DOCTYPE html>
<html>
    <head>
        <title>Menu HTML déroulant</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="menu.css">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
        <body>
            
            <img class="img" src="images/International_Pokémon_logo.svg.png" alt="International_Pokémon_logo.svg">
            <img class="img" src="images/Pokeball.png" alt="Pokeball.png">
            <nav>
                <ul>
                    <li class="menu-accueil"><a href="index.php">Accueil</a>
                        <ul class="submenu">
                        </ul>
                    </li>
                    <li class="menu-API"><a href="#">API</a>
                            <ul class="submenu">
                                <li><a href="API%201.php">API 1</a></li>
                                <li><a href="API%202.php">API 2</a></li>
                            </ul>
                    </li>
                </ul>
            </nav>
<div class="container main-section">
    <div class="row">
        <?php 
        // create curl resource 
        $ch = curl_init(); 

        // set url 
        curl_setopt($ch, CURLOPT_URL, "http://145.239.32.254:8081/pokemon/pokemons"); 

        //return the transfer as a string 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

        // $output contains the output string 
        $output = curl_exec($ch); 

        // close curl resource to free up system resources 
        curl_close($ch);   
        
        $json = json_decode($output, true);

        
        
        
        for ($i=0;$i < count($json); $i++) {
        echo "<div class='col-md-4 col-sm-4 col-xs-12'><div class='row product-part'><div class='col-md-12 col-sm-12 colxs-12 img-section'><img class= imgbox src= '" .$json[$i]['image']."'></div>
        <div class='col-md-12 col-sm-12 col-xs-12 product-title'><h1>"  .$json[$i]['nom']. "</h1></div>
        <div class='col-md-12 col-sm-12 col-xs-12 product-description'><p> id :" .$json[$i]['numero']. "</p></div>
        <div class='col-md-12 col-sm-12 col-xs-12 product-cart'><div class='row'><div class='col-md-6 col-sm-12 col-xs-6'><p>Type : "  .$json[$i]['type']. "</p></div>
        <div class='col-md-6 col-sm-12 col-xs-6 text-right product-add-cart'><a href='API%202.php' class='btn btn-success'>Spécialisation</a></div></div></div></div></div>";


    } ?>
       
    </div>
</div>
            <footer>
                <p>Corentin Jacob</p>
            </footer>
    
        </body>
</html>