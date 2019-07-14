function Universo() {
}

Universo.prototype = {
    constructor: Universo,
    length: 0,
    addReality: function (realidad) {
        this[realidad] = [];
        this.length++;
    },
    cruzarDimension: function (personajes, origen, destino) {
        for (i=0; i < origen.length; ++i) {
            if (personajes.includes(origen[i])){
                destino.push(origen[i]);
                origen.splice(i, 1);
                --i;
            }
        }
    }
};

module.exports = {
    Universe: Universo,
};