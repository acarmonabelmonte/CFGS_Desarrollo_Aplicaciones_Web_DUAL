// ARRAYS

// Orden alfabético
numeros.sort();

// Orden numérico
numeros.sort(function (a, b) {
    return a - b
}); 

// Encontrar índice
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = array.findIndex(elementoArray => elementoArray == busqueda);

// forEach
array.forEach((value, index) => {
    // haz "x"
});