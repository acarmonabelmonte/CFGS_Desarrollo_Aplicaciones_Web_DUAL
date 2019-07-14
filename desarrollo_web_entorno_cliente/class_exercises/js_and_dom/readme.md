# Ejercicios JS & DOM
Para solucionar estos ejercicios, busca los conceptos sobre el DOM y las propiedades y funciones que necesites en el capítulo 15 del libro _JS The definitive guide_ (el del rinoceronte).

El código necesario está en nuestra carpeta del Drive:

[https://drive.google.com/drive/folders/106cd47Fw4GdfQhF7jxVnQXIdJq682FPe](https://drive.google.com/drive/folders/106cd47Fw4GdfQhF7jxVnQXIdJq682FPe)

### Exercise  1

A partir de la pàgina web proporcionada (projecte mundo perdido, disponible al nostre Drive, a la Unitat 15, alerta que és una nova versió distinta a la que varem fer servir l'altre dia) i utilitzant les funcions DOM, mostrar al principi de la mateixa pàgina les següent informacions:

-   Nombre d'enllaços de la pàgina
-   Nombre de paràgrafs de la pàgina
-   Adreça a la qual enllaça el penúltim enllaç
-   Adreça a la qual enllaça el darrer enllaç
-   Número d'enllaços que enllacen a [`http://www.jurassicpark.com`](http://www.jurassicpark.com)
-   Nombre d'enllaços de tots els paràgrafs

Explica les funcions amb les que manipules el DOM en aquest exercici.

Font de l’exercici: [http://librosweb.es/](http://librosweb.es/)

### Exercise 2

A partir de la pàgina web DWEC_P03_306.html (disponible al nostre Drive, a la Unitat 15) i utilitzant les funcions DOM, s'ha de modificar el protocol de totes les adreces dels enllaços, canviant `http` per `https`. D'aquesta forma, si un enllaç apuntava a `http://www.iessonferrer.net`, ara ha d'apuntar a [`https://www.iessonferrer.net`](https://www.iessonferrer.net)

-   Els paràgrafs de la pàgina l'atribut de la qual class és igual a `importante` han de modificar-ho per `resaltar`. La resta de paràgrafs han d'incloure un atribut class igual a `normal`
-   Als enllaços de la pàgina l'atribut de la qual class sigui igual a `importante`, se'ls afegeix un atribut `name` amb un valor generat automàticament i que sigui igual a `importante+i`, on `i` és un valor numèric el valor inicial del qual és 0 per al primer enllaç.

Alerta a `getAttribute` i `setAttribute`.

Font de l’exercici: [http://librosweb.es/](http://librosweb.es/)

### Exercise 3: Build a table

Esto lo tenéis en el libro Eloquent JS:

[https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe](https://eloquentjavascript.net/14_dom.html#h_TcUD2vzyMe)

An HTML table is built with the following tag structure:

    <table>   
    	<tr>     
    		<th>name</th>     
    		<th>height</th>     
    		<th>place</th>   
    	</tr>
    	<tr>     
    		<td>Kilimanjaro</td>
    	    <td>5895</td>
    	    <td>Tanzania</td>
    	</tr>
    </table>

For each _row_, the `<table>` tag contains a `<tr>` tag. Inside of these `<tr>` tags, we can put cell elements: either heading cells (`<th>`) or regular cells (`<td>`).

Given a data set of mountains, an array of objects with `name`, `height`, and `place` properties, generate the DOM structure for a table that enumerates the objects. It should have one column per key and one row per object, plus a header row with `<th>` elements at the top, listing the column names.

Write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data.

Add the resulting table to the element with an `id` attribute of `"mountains"` so that it becomes visible in the document.

Once you have this working, right-align cells that contain number values by setting their `style.textAlign` property to `"right"`.

    <h1>Mountains</h1>  
    <div id="mountains"></div>  
    <script>   
    	const MOUNTAINS = [
    	{name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    	{name: "Everest", height: 8848, place: "Nepal"},
    	{name: "Mount Fuji", height: 3776, place: "Japan"},
    	{name: "Vaalserberg", height: 323, place: "Netherlands"},
    	{name: "Denali", height: 6168, place: "United States"},
    	{name: "Popocatepetl", height: 5465, place: "Mexico"},
    	{name: "Mont Blanc", height: 4808, place: "Italy/France"}   ];    
    	// Your code here </script>

### Exercise 4

Este ejercicio hace uso de eventos en JS. No es necesario resoverlo ahora.

Has de llegir el document Exercici_04.doc del Drive:

[https://drive.google.com/drive/folders/106cd47Fw4GdfQhF7jxVnQXIdJq682FPe](https://drive.google.com/drive/folders/106cd47Fw4GdfQhF7jxVnQXIdJq682FPe)

### Exercise 5

Crea una pàgina on apareguin 10 imatges (poden ser la mateixa i les pots agafar del teu ordinador). Amb Javascript, recorre tot el DOM de la pàgina (és obligatori recórrer el DOM i no fer servir mètodes de l’estil `document.getElementByTagName`) i crear una llista no ordenada `<ul>` amb l’atribut `alt` de les imatges que hi ha a la pàgina.