
/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
    
    scope = "local"; // cambio de valor de la variable global scope inicializada sin var
    myscope = "local"; // nueva variable inicializada sin var
 
    return [scope, myscope];
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);           // devuelve "local", es una variable global inicializada sin var 
