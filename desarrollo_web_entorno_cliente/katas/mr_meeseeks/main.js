//Imports
const boxModules = require('./box');
const actionModules = require('./accion');

//Creamos la caja de Meeseeks
let box = new boxModules.MeeseeksBox();

//Creamos la realidad en formato Array
 let realidad = [];

/*Crear Meeseek y abrir el estúpido bote de mayonesa de Jerry,
cumple la tarea, y desaparece de la realidad*/
box.pressButton(realidad);
console.assert(realidad.length ===1);

let lastMeeseek = realidad[0];

console.log("Rick: Abre el estúpido bote de mayonesa de Jerry");
lastMeeseek.makeRequest("abrir bote de mayonesa",realidad);

console.assert(realidad.length ===0);

/*Summer, pide ser popular en el instituto, cumple deseo y desaparece*/
console.log("\n----------------------------------------------------------");
box.pressButton(realidad);
console.assert(realidad.length ===1);

console.log("Summer: Quiero ser popular en el instituto");
lastMeeseek.makeRequest("ser popular en el insti", realidad);

console.assert(realidad.length ===0);
/*Beth, pide sentirse realizada, cumple deseo y desaparece*/
console.log("\n----------------------------------------------------------");
box.pressButton(realidad);
console.assert(realidad.length ===1);

console.log("Beth: Quiero sentirme realizada");
lastMeeseek.makeRequest("sentirme realizada", realidad);

console.assert(realidad.length ===0);
/*Jerry, pide reducir en dos sus golpes de golf*/
console.log("\n----------------------------------------------------------");
box.pressButton(realidad);
console.assert(realidad.length ===1);

console.log("Jerry: Quiero reducir en dos mis golpes de golf");
lastMeeseek.makeRequest("reducir en dos golpes", realidad);

console.assert(realidad.length ===1);

/*Meeseek de Jerry pulsa la caja y crea otro*/
console.log("\nMr. Meeseek: Intentaré una cosa (pulsa caja de meeseeks)");
box.pressButton(realidad);
console.assert(realidad.length ===2);

// Al cambiar el saludo del meeseek prototipo, todos los creados a partir de este heredarán el nuevo saludo
box.protoMeeseek.messageOnCreate = "Hi!";

/*Se crean múltiples meeseeks y van a matar a Jerry*/
//Creamos por ejemplo 15 meeseeks más que con los dos anteriores sumarían 17
console.log("\n----------------------------------------------------------");
console.log("###### Varios Meeseeks pulsan la caja ######");

let i = 1;
while (i <= 15) {
 box.pressButton(realidad);
 i++
}
console.assert(realidad.length === 17);

/*Meter tomate en olla, desaparecen todos los meeseeks menos 1*/
console.log("\n----------------------------------------------------------");
console.log("###### Jerry mete un tomate dentro de una olla ######");
actionModules.tomatoe("olla");


/*Juego en el green, meter cebolla en taza*/
console.log("\n----------------------------------------------------------");
console.log("###### Jerry mete una cebolla dentro de una taza ######");
actionModules.onion("taza");

