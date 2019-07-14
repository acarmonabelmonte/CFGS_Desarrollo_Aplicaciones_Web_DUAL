function Jerry() {
}

Jerry.prototype = {
    constructor: Jerry,
    id: 'Jerry',
    speak: function () {
    return 'Tengo una colección de monedas antiguas raras!'
    },
    getMonedas: function() {
        let coleccionMonedas = ["R2-D2","R2-D2","R2-D2","R2-D2"];
        return coleccionMonedas;
    }
};

//---

function DoffusRick() {
}

DoffusRick.prototype = {
    constructor: DoffusRick,
    id: "J-19-Z7",
};


let jerry = new Jerry();

// Agregar own propierties en ownPros array y prototype properties en prototypeProps array:


    DoffusRick.prototype = Object.assign(jerry)


console.log(DoffusRick.getMonedas);