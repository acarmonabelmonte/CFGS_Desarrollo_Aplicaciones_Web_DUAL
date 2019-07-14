var SingletonJerry = function() {
    if ( SingletonJerry.prototype.instance ) {
        return SingletonJerry.prototype.instance;
    }
    SingletonJerry.prototype.instance = this;
    this.id = "Jerry",
    this.speak = function () {
        return 'Tengo una colección de monedas antiguas raras!'
    },
    this.getMonedas = function() {
        let coleccionMonedas = ["R2-D2","R2-D2","R2-D2","R2-D2"];
        return coleccionMonedas;
    }
};

module.exports = {
    jerryTierra: SingletonJerry
};