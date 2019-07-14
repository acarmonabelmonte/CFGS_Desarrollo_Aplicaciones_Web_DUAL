
/**
 * global vs local
 */

var scope = "global";

function checkscope() {
    var scope = "local"; //misma variable, se modifica su valor dentro de la función
    return scope;
}

console.log(checkscope());      // => "local"
