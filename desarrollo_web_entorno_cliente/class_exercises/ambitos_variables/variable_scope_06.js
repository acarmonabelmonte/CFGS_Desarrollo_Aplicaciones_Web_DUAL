
/**
 * global vs local
 * function scope and hoisting
 */

 var scope = "global";

function f() {

    var scope;
    console.log(scope); // valor no definido dentro del bloque
    scope = "local";    // se le asigna valor local a la var scope
    console.log(scope); 
}

f();

console.log(scope); // valor global definido fuera de la función