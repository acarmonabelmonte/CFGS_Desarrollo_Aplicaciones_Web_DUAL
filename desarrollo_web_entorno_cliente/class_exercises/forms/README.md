# DWEC_P06: Exercicis de la U. D. 6.

**6.1. Crea una funció anomenada “retornaValor” a la que se li passi com a paràmetre un objecte d’un formulari. La funció ha de retornar el valor de l’element tenint en compte si és text, textarea, radiobutton, checkbox o select. En cas de que hi hagi múltiples valors retornarà un array. Quan es faci clic en el botó de “Submit”, has de fer un bucle que recorri tots els elements del formulari i fer servir la funció descrita en el paràgraf anterior. Finalment, posa el contingut del formulari en una línia (com es mostra en la imatge). La solució d’aquest exercici ha de funcionar independentment del formulari emprat.**

![enter image description here](https://lh3.googleusercontent.com/JCuUD9fOHfI_ZfhuLYrN6QD8aoF9SG4f4A8AJBFmOohLjmaaYVEsmhjpPmFJBIABDIW6a7iojO30 "exercise01")

**6.2. Programar en JavaScript codi per a què només es pugui escriure un límit de caràcters en un textarea (sense fer servir la propietat maxlength de HTML5, ho feim per practicar). S’ha d’indicar en tot moment a l'usuari el nombre de caràcters que encara pot escriure. A més, s'ha de permetre espitjar les tecles Backspace, Supr. i les fletxes del cursor. (Per exemple fes que el nombre màxim de caràcters sigui 150).**

![
](https://lh3.googleusercontent.com/_dJPQELIPDvC8zcAqXk1-tctgFtX-N2qg-THGiAgQORjEP0d4vhTlgCggi5lGx5bBqXHcB-valGi "exercise02")

**6.3. Fes un quadre de text en el que es permeti entrar binari, octal, decimal o hexadecimal. Només ha de permetre entrar els símbols del sistema de numeració que estigui seleccionat en aquell moment. Quan es canviï de sistema de numeració s’ha d’esborrar el quadre de text.**

![
](https://lh3.googleusercontent.com/HBlSzfkB4yaKX_X3ZbhJRxSfxEwSa1GGKX9FNlRhXEAjBWWA30__FJyxEFY2wWvGHj97JMIbi6Th "exercise03")

***PISTA: No és obligatori fer-ho així***

    window.onload = function() {
    document.getElementById("txtNums").onkeypress = function(event){
    return limitaCaracters(event,retornaValor(document.getElementById("selSistNum")));
    };
    document.getElementById("selSistNum").onchange = function() {
    document.getElementById("txtNums").value = "";
    }
    }

**6.4. Dissenyar un formulari que compti amb els següents camps relatius a un usuari:**

 - El nom (no pot estar buit).
 - L'adreça de correu (ha de ser vàlida).
 - Una contrasenya (d'almenys 8 caràcters i que compti almenys amb un
   dígit i un dels caràcters en majúscula).
 - Repetició de la contrasenya (ha de coincidir amb l'anterior,
   òbviament).
 - Una operació matemàtica de suma entre dos nombres enters d'un dígit
   determinats a l'atzar (p. e. 5 + 3 = ?) amb la finalitat de
   sol·licitar el seu resultat per evitar robots que omplin formularis.
 - Una casella de verificació de “Acepto les condicions” inicialment
   desactivada.
 - Fins que aquesta opció no es verifiqui no s'habilitarà el botó
   d'enviament.
 - Un botó d'enviament amb el text “Crear compte”.

**Els elements aniran validant-se de forma individual, de manera que si no és correcte apareixerà un text en vermell damunt de l'element indicant l'error i aquest prendrà el focus. S’ha de fer tot en JS evitant fer servir les característiques de validació de formularis d’HTML5.**

**Fonts exercicis:
 http://librosweb.es/**
