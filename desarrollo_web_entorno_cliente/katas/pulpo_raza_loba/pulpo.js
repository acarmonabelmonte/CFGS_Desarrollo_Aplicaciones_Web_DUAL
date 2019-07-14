//Importar array JOURNAL que contiene eventos.
var myJournal = require("./journal.js");

var Registro = {
    contieneEvento : function (evento, eventos) {
        if (eventos.includes(evento)){
            console.log('El evento ' + evento + ' se encuentra en el registro día.')
        } else {
            console.log('No se encuentra el evento ' + evento + ' en el registro del día.')
        }
    },
    mostrarRegistro: function(day) {
        console.log('Eventos: ' + day.events);
        console.log('Pulpo: ' + day.squirrel);
    }
};

var Diario = {
    incluirRegistro: function (registro) {
        myJournal.push(registro);
    },
    mostrarDiario: function () {
        let day = 0;
        console.log('Mostrar todos los registros del diario: \n---------------')
        for(i=0; i<myJournal.length; i++) {
            day++;
            console.log('Día ' + day);
            console.log('eventos: ' + myJournal[i].events + ' => pulpo: ' + myJournal[i].squirrel + '\n---------------');
        }
    }
};

var Correlacion = {
    phi: function (tabla) {
        return (tabla[3] * tabla[0] - tabla[2] * tabla[1]) /
        Math.sqrt((tabla[2] + tabla[3]) *
            (tabla[0] + tabla[1]) *
            (tabla[1] + tabla[3]) *
            (tabla[0] + tabla[2]))
    }
};

var Tabla = {
    matrizEventos: [],
    tieneEvento: function(evento, diario) {
        return diario.events.indexOf(evento) != -1;
    },
    tablaPara: function(evento, diario) {
        this.matrizEventos = [0, 0, 0, 0];
        for (var i = 0; i < diario.length; i++) {
            var entrada = diario[i], index = 0;
            if (this.tieneEvento(evento, entrada)) index += 1;
            if (entrada.squirrel) index += 2;
            this.matrizEventos[index] += 1;
        }
        return this.matrizEventos
    },
    mostrarTabla: function () {
        console.log(this.matrizEventos)
    }
};

var Phis = {
    calcularCorrelaciones: function (diario) {
        var mapaCoeficientes = {};
        for (var entrada = 0; entrada < diario.length; entrada++) {
            var eventos = diario[entrada].events;
            for (var i = 0; i < eventos.length; i++) {
                var evento = eventos[i];
                if (!(evento in mapaCoeficientes))
                    mapaCoeficientes[evento] = Correlacion.phi(Tabla.tablaPara(evento, diario));
            }
        }
        return mapaCoeficientes;
    }
};
// Exportar módulo para realizar testing:
module.exports = {
    diario: Diario,
    registro: Registro,
    correlacion: Correlacion,
    tabla: Tabla,
    phis: Phis
};
