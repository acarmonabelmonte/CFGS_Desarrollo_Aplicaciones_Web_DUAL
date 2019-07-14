function Item(product) {
    this.item = product;
}

Item.prototype = {
    constructor: Item,
    nombre: function() {
        return this.item.nombre;
    },
    empaquetado: function() {
        return this.item.empaquetado;
    },
    pvp: function() {
        return this.item.pvp;
    },
};

module.exports = {
    Item
};