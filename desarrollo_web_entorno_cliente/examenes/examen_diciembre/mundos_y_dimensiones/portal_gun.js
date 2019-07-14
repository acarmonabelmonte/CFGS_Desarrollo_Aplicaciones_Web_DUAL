function portalGun() {
    this.registroPistola = [];
}

portalGun.prototype = {
    constructor: portalGun,
    get historial () {
        return this.registroPistola;
    },
    addToHistorial: function(reality) {
        this.registroPistola.unshift(reality);
    },
    shoot: function(universo, realidad) {
        universo.addReality(realidad);
        this.addToHistorial(realidad);
    },
    scan: function () {
        console.log("Historial de dimensiones");
        console.log("---------------------------");
        for (let i in this.historial) {
            console.log(this.historial[i]);
        }
        console.log("---------------------------");
    },
};

module.exports = {
    portalgun: portalGun,
};