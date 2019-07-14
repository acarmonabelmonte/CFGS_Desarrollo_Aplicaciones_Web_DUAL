var myJournal = require("../journal.js");
const importModules = require('../pulpo');

// Mostrar si evento determinado se encuentra en la lista de eventos:
// ejemplo de prueba ----> "events":["carrot","exercise","weekend"],"squirrel":false}, ---> length = 3
console.log('-------------------- Testing Registro --------------------');
console.assert(myJournal[0].events.length == 3, 'Longitud errónea');
console.log('La longitud del registro: ' + myJournal[0].events + ' es '  + myJournal[0].events.length);
console.assert(myJournal[0].squirrel === false, 'Valor incorrecto');
importModules.registro.contieneEvento('carrot', myJournal[0].events);
importModules.registro.contieneEvento('zapato', myJournal[0].events);
// Mostrar registro indicado del diario:
importModules.registro.mostrarRegistro(myJournal[0]);


// Incluir nuevo registro en el diario:
console.log('-------------------- Testing Diario --------------------');
importModules.diario.incluirRegistro(({"events":["caminar","hacer la compra","bailar"],"squirrel":true}));
// Mostrar todos los registros del diario:
importModules.diario.mostrarDiario();
console.assert(myJournal.length == 91, 'Longitud errónea');
console.log('El diario tiene ' + myJournal.length + ' registros.');


// Mostrar correlación
console.log('-------------------- Testing Correlación --------------------');
console.log('[ 76, 9, 4, 1] => phi = ' + importModules.correlacion.phi([ 76, 9, 4, 1])); // 0.068599434


// Mostrar matriz 2 x 2 de eventos:
console.log('-------------------- Testing Tabla --------------------');
importModules.tabla.tablaPara("carrot", myJournal);
console.log('La tabla para carrot es:');
importModules.tabla.mostrarTabla();

// Mostrar evento y su coeficiente Phis
console.log('-------------------- Testing Phis --------------------');
var correlaciones = importModules.phis.calcularCorrelaciones(myJournal);
for (var eventos in correlaciones)
    console.log(eventos + ": " + correlaciones[eventos]);
