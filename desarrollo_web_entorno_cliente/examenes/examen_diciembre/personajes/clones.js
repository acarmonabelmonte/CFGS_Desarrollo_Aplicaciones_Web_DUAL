function clonar(personaje) {
    let clonPersonaje = Object.create(personaje);
    assignId(clonPersonaje);
    return clonPersonaje;
}

function createId() {
    return 'C-' + (Math.round(Math.random() * (1000 - 138) + 138)).toString();
}

var idsRegistrados = [];

function assignId(clon) {
    let idRandom = createId();
    while (idsRegistrados.includes(idRandom)) {
        idRandom = createId();
    }
    idsRegistrados.push(idRandom);
    clon.id =idRandom;
}

module.exports = {
    clonacion: clonar
};
