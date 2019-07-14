// EVENTOS

// Agregar escuchador de eventos
// Click
boton.addEventListener('click', function () {
    // Haz "x"
});

// Mouse Over (pasar ratón por encima de elemento)
boton.addEventListener('mouseover', function () {
    // Haz "x"
});

// Mouse Out (salir ratón por encima de elemento)
boton.addEventListener('mouseout', function () {
    // Haz "x"
});

// Focus (al entrar en elemento)
input.addEventListener('focus', function () {
    // Haz "x"
});

// Blur (al salir del elemento)
input.addEventListener('blur', function () {
    // Haz "x"
});

// Keydown (indica qué tecla estás pulsando al momento)
input.addEventListener('keydown', function (event) {
    // Mostrar por consola las teclas que se pulsan dentro del elemento input
    console.log("Estás pulsando esta tecla:", String.fromCharCode(event.keyCode));
});

// Keypress (indica qué tecla has presionado)
input.addEventListener('keypress', function (event) {
    // Mostrar por consola las teclas que se pulsan dentro del elemento input
    console.log("Has presionado esta tecla:", String.fromCharCode(event.keyCode));
});

// Keyup (indica tecla soltada)
input.addEventListener('keyup', function (event) {
    // Mostrar por consola las teclas que se pulsan dentro del elemento input
    console.log("Tecla soltada:", String.fromCharCode(event.keyCode));
});

// Load (igual que windows.onload)
window.addEventListener('load', () => {
    // Todo se ejecutará al cargar el navegador
});

//Timers
// setInterval (se ejecuta varias veces)
var tiempo = setInterval(function () {
    //haz esto cada "x" tiempo (3 segundos en este caso)
}, 3000);

// setTimeout (se ejecuta una única vez)
var tiempo = setIntsetTimeouterval(function () {
    //haz cuando pase "x" tiempo (3 segundos en este caso)
}, 3000);

// clearInterval (para evento setInterval)
var stop = document.querySelector('#stop');
stop.addEventListener("click", function(){
    clearInterval(tiempo);
});

