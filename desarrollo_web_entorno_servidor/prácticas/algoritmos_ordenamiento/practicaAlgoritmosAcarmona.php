<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="css/bootstrap.css">
		<link rel="stylesheet" href="css/bootstrap-grid.css">
		<link rel="stylesheet" href="css/bootstrap-reboot.css">
		<link rel="stylesheet" href="css/style.css">
		<script src="js/bootstrap.js"></script>
		<script src="js/bootstrap.bundle.js"></script>
		<title>Algoritmos de ordenación</title>
	</head>

<body>
  <h1> Algoritmos de ordenación </h3>

  <?php
    //Creamos un array con todos los metodos de ordenacion de los que disponemos
    $sorts = [
      'ordenar_array_por_burbuja',
      'ordenar_array_por_intercambio',
    ];
    //obtenemos los valores de las variables que vienen por POST
    $metodoOrd ='';
    $sort = $_POST['metodoOrd']; //de este modo sabemos que metodo tenemos que aplicar
    if (isset($sort)) {
      //sabiendo el metodo, formateamos el nombre para posterior uso en el html
      $methodName=str_replace('_', ' ', $sorts[$sort]);     
    }
    function ordenar_array_por_burbuja($arrayFinal) {
      do {
        $swap = false;
        for ($i=0; $i<count($arrayFinal)-1; $i++) {
          $temp = $arrayFinal[$i];
          if ($arrayFinal[$i] > $arrayFinal[$i+1]) {
            $arrayFinal[$i] = $arrayFinal[$i+1];
            $arrayFinal[$i+1] = $temp;
            $swap = true;
          }
        }
      }
      while ($swap);
      return $arrayFinal;
    }
    function ordenar_array_por_intercambio($arrayFinal) {
      for($i=0; $i<count($arrayFinal); $i++) {
        $lowest = $arrayFinal[$i];
        $j = $i;
        $index = $i;
        while($j < count($arrayFinal)) {
          if($arrayFinal[$j] < $lowest) {
            $lowest = $arrayFinal[$j];
            $index = $j;
          }
          $j++;
        }
        $arrayFinal[$index] = $arrayFinal[$i];
        $arrayFinal[$i] = $lowest;
      }
      return $arrayFinal;    
    }
  ?>

  <hr><h3>Genere Arrays de manera random</h3>
  <form action="practicaAlgoritmosAcarmona.php" method="post" enctype="multipart/form-data">
  Cantidad de números: <input type="number" name="cantidadNumeros" placeholder="Min: 0, max: 50" min="0" max="50">
  <br><br>

  <?php
    //si tenemos la variable por parte del usuario inicializaremos la construccion aleatoria del array
    if (isset($_POST['cantidadNumeros']) && $_POST['cantidadNumeros'] > 0) {
      $size = $_POST['cantidadNumeros'];
      $arrayFinal = [];
      //creamos tantos numeros como nos ha introducido el usuario, limitamos el tamaño de estos por legibilidad
      for ($i=0; $i<$size; $i++) {
        $arrayFinal[$i] = rand(0, 80);
      }
      //una vez construido el array aleatorio, lo pasamos por el metodo de sort que se haya elegido y construimos una
      //tabla de resultados
      $output = '<table><thead><tr><th>Array generada de manera random después de '.$methodName.' </th></tr></thead><tbody><tr>';
      $output.='<td>'.implode(', ', $arrayFinal).'</td>';
      $sortedArray = $sorts[$sort]($arrayFinal);
      $output.='<td>'.implode(', ', $sortedArray).'</td>';
      $output.='</tbody></table>';
      echo $output;
    }
  ?>

  <br><hr><h3>Introduzca un Array de números enteros manualmente</h3>
  <input type="text" name="arrayManual" placeholder="Separe por comas">
  <br>
  <?php
    if (isset($_POST['arrayManual']) && $_POST['arrayManual'] != "") {
      //comprobaremos que el input cumple con el formato pedido => ejemplo: 1, 4, 5, 2, 6
      $input = $_POST['arrayManual'];
      $input = str_replace(' ', '', $input);
      $arrayFinal = explode(',', $input);
      $arrayFinal_are_numbers = true;
      foreach($arrayFinal as $value) {
        if (!is_numeric($value)) {
          $arrayFinal_are_numbers = false;
        }
      }
      //construimos tabla de resultados
      if ($arrayFinal_are_numbers == true) {
        $output = '<table><thead><tr><th>Array introducida después de '.$methodName.' </th></tr></thead><tbody><tr>';
        $output.='<td>'.implode(', ', $arrayFinal).'</td>';
        $sortedArray = $sorts[$sort]($arrayFinal);
        $output.='<td>'.implode(', ', $sortedArray).'</td>';
        $output.='</tbody></table>';  
        echo $output;
      } else {
        //de no haberse cumplido el formato solicitado avisaremos al usuario
        $output = '<h4 class="error">Por favor, introduce valores númericos enteros!</h4>';
        echo $output;
      }
    }
  ?>

  <br><br><hr>

  <h3>Selecciona el método de ordenacion</h3>
  Métodos: 
  <?php 
    //creamos un select que tendra como opciones cada metodo cargado en la lista de sorts.
    //el valor que pasaremos por post sera la posicion del metodo en la array (0, 1, 2)
    $output='<select name="metodoOrd">';
    foreach($sorts as $i=>$s) {
      $output.='<option value="'.$i.'">'.str_replace('_', ' ', $s).'</option>';
    }
    echo $output;
  ?>
  <input type="submit" value="¡Adelante!" class="btn btn-primary" id = "boton">

  </form>
  <br>

</body>
</html>

