function accion(objeto) {
    return function(objetivo) {
        console.log(objeto + " en " + objetivo);
    };
}

var tomate = accion("tomate");
var cebolla = accion("cebolla");

tomate("olla");
cebolla("taza");

module.exports = {
    tomatoe: tomate,
    onion: cebolla
};