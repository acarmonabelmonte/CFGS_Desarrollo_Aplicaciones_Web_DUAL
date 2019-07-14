function Desayuno(cereales, bebida, juguete = null) {
    if (juguete != null) {
        this.items = [cereales, bebida, juguete];
    }
    else {
        this.items = [cereales, bebida];
    }
}

Desayuno.prototype = {
    constructor: Desayuno,
    // recorre los items y los muestra en pantalla
    mostrarItems: function () {
        for (let i in this.items) {
            console.log (
                'Item: ' + this.items[i].nombre() + 
                ', Empaquetado: ' + this.items[i].empaquetado() +
                ', Precio: ' + this.items[i].pvp() 
                );
        }
    },
    // devuelve el precio total del desayuno
    getCoste: function () {
        let precioTotal = 0
        for (let i in this.items) {
            precioTotal = precioTotal + this.items[i].pvp()
        }
        console.log(
            'Precio total: ' + precioTotal
        )
    }
};

module.exports = {
    Desayuno
};