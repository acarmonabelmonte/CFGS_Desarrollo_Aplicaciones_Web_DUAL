<?php
    // Valor máximo del rango del num. aleatorio
    define( "MAX", 5); 
    // Valor Mínimo del rango del num. aleatorio
    define( "MIN", 1); 
    //Número máximo de intentos que tiene el usuario para adivinar número
    define( "NUMEROINTENTOS", 3); 

    // Array que contiene mensajes para informar al usuario
    $messages = array(
                      "Alto" => "¡Te has pasado!",
                      "Bajo" => "¡Te has quedado corto!", 
                      "Ganado" => "¡Has ganado! El numero correcto es: ",
                      "Perdido" => "¡Has perdido! El numero correcto es: ",
                      "Intentos" => "Tu numero de intentos es: "
                     ); 

    if(isset($_POST['numero'])) {
        $numero = $_POST['numero'];
        $intentos= $_POST['intentos'] - 1;
    } else {
        $intentos = NUMEROINTENTOS; 
        $numero = random_int(MIN, MAX);
    }
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Examen recuperación DWES</title>
</head>

<body>
    <div class="container text-center mt-5">
    <p>
        Intenta adivinar un número entre 1 y <?= MAX;?>
    </p>
    
    <form method="post" name="primer-juego">
        <label>Inserta tu numero:</label><br />
        <input type="text" id="intentado" name="intentado" />
        <input name="numero" type="hidden" value="<?= $numero ?>" />
        <input name="intentos" type="hidden" value="<?= $intentos ?>" />
        <input name="submit" type="submit" value="¡Adelante!" />
    </form><br>

    <form method="post" name="nuevo-juego">
        <input name="submit" type="submit" value="¡Vuelve a jugar!" />
    </form>
    </div>

    <?php
        if(isset($_POST["intentado"])){
            $intentos = $_POST['intentos'] - 1;
            $numero  = $_POST['numero'];
            $numeroIntentado  = $_POST['intentado'];
            $messageIntentos = '<p class="text-center text-warning mt-2">' . 
                                $messages["Intentos"] . $intentos . '</p>';

            if($intentos > 0){
                if ($numeroIntentado === $numero) {
                    echo '<p class="text-center text-success mt-2">' . $messages["Ganado"] . $numero . '</p>';
                }
                elseif ($numeroIntentado > $numero) {
                    echo '<p class="text-center text-primary mt-2">' . $messages["Alto"] . '</p>';
                } 
                else {
                    echo '<p class="text-center text-primary mt-2">' . $messages["Bajo"] . '</p>';                 
                }
            } else {
                    echo '<p class="text-center text-danger mt-2">' . $messages["Perdido"] . $numero . '</p>';             
                }
        echo $messageIntentos;
        }
    ?>

</body>

</html>