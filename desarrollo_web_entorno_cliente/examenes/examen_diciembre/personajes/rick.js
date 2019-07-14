var SingletonRick = function() {
    if ( SingletonRick.prototype.instance ) {
        return SingletonRick.prototype.instance;
    }
    SingletonRick.prototype.instance = this;
    this.id = "C-137";
    this.ondas = "altas";
    this.habla = "Es Rick-dículo!";
    this.takeTheGun = function (gun) {
        this.gun = gun;
    }
};

module.exports = {
    rickTierra: SingletonRick
};

