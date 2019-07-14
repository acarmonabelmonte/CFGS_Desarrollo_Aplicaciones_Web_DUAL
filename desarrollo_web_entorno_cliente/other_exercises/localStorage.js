//LOCAL STORAGE

// Comprobar disponibilidad del localstorage
if (typeof(Storage) !== 'undefined') {
    console.log('LocalStorage disponible');
} else {
    console.log('Navegador incompatible con localStorage');
};

// Guardar datos
localStorage.setItem("clave", "valor");

// Recuperar elemento
localStorage.getItem("clave");

// Guardar objetos
var usuario = {
    nombre: "Adrián",
    apellido: "Carmona",
    edad: 26
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

// Borrar item
localStorage.removeItem('clave');

// Borrar todo
localStorage.clear();