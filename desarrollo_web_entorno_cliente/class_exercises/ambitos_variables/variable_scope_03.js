
/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
    
    var scope = "local scope";
    
    function nested() {
        
        var scope = "nested scope";
        return scope;
    }

    return nested();
}

console.log(checkscope());              // => "nested scope" => checkscope() llama a nested() 
                                        //     que devuelve el valor de la var scope declarada dentro de su bloque

console.log(scope);                     // => "global scope" => muestra el valor de var scope declarada fuera 
                                        //     de las funciones como global
