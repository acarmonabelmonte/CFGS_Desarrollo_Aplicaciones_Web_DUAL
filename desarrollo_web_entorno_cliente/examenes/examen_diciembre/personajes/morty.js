var SingletonMorty = function() {
    if ( SingletonMorty.prototype.instance ) {
        return SingletonMorty.prototype.instance;
    }
    SingletonMorty.prototype.instance = this;
    this.id = 'earthMorty',
    this.ondas = 'bajas',
    this.habla = "Oohh man!",
    this.partner = null,
    this.assignPartner = function (partner) {
        this.partner = partner
    }
};

module.exports = {
    mortyTierra: SingletonMorty
};