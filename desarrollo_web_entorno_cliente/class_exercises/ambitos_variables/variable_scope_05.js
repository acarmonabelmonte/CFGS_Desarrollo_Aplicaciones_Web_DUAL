
/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {

    console.log(scope);             // undefined, valor no declarado ni definido dentro de la función
    var scope = "local";
    console.log(scope);             // Prints "local"
}

f();

console.log(scope);                 // Prints "global"