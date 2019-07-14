/**
 * Importa los módulos de tus clases
 */
const rickModules = require('./personajes/rick');
const mortyModules = require('./personajes/morty');
const jerryModules = require('./personajes/jerry');
const cloneModules = require('./personajes/clones');
const doofusModules = require('./personajes/doofus_rick');
const universeModules = require('./mundos_y_dimensiones/universo');
const gunModules = require('./mundos_y_dimensiones/portal_gun');
/**
 * Crea el objeto Rick
 */
let protoRick = new rickModules.rickTierra();

//Comprobar que exista una sola instancia:
let protoRick2 = new rickModules.rickTierra();
console.assert(protoRick === protoRick2);

console.assert(protoRick);
console.assert(protoRick.id == "C-137");
console.assert(protoRick.ondas == "altas");
console.assert(protoRick.habla == "Es Rick-dículo!");

/**
 * Crea el objeto Morty
 */
let protoMorty = new mortyModules.mortyTierra();

//Comprobar que exista una sola instancia:
let protoMorty2 = new mortyModules.mortyTierra();
console.assert(protoMorty === protoMorty2);

protoMorty.assignPartner(protoRick);

console.assert(protoMorty);
console.assert(protoMorty.id == "earthMorty");
console.assert(protoMorty.ondas == "bajas");
console.assert(protoMorty.partner == protoRick);
console.assert(protoMorty.habla == "Oohh man!");

/**
 * Crea el objeto Jerry
 */
let jerry = new jerryModules.jerryTierra();

//Comprobar que exista una sola instancia:
let jerry2 = new jerryModules.jerryTierra();
console.assert(jerry === jerry2);

jerry.monedas = jerry.getMonedas();

console.assert(jerry);
console.assert(jerry.id = "Jerry");
console.assert(jerry.monedas.length == 4);
console.assert(jerry.monedas[0] == "R2-D2");
console.assert(jerry.speak() == "Tengo una colección de monedas antiguas raras!");

/**
 * Crea 2 Rick-clones y 1 clon de Morty
 * y asocia como partner de ese Morty a uno de los Rick-clones.
 */
let clonRick = cloneModules.clonacion(protoRick);
let otroRick = cloneModules.clonacion(protoRick);
let clonMorty = cloneModules.clonacion(protoMorty);
clonMorty.assignPartner(clonRick);

console.assert(clonRick);
console.assert(protoRick != clonRick);
console.assert(Object.getPrototypeOf(clonRick) == protoRick);
console.assert(clonRick.id != "C-137");
console.assert(clonRick.ondas == "altas");
console.assert(clonRick.habla == "Es Rick-dículo!");

console.assert(otroRick);
console.assert(protoRick != otroRick);
console.assert(Object.getPrototypeOf(otroRick) == protoRick);
console.assert(otroRick.id != "C-137");
console.assert(otroRick.ondas == "altas");
console.assert(otroRick.habla == "Es Rick-dículo!");

console.assert(clonMorty);
console.assert(clonMorty != protoMorty);
console.assert(Object.getPrototypeOf(clonMorty) == protoMorty);
console.assert(clonMorty.ondas == "bajas");
console.assert(clonMorty.partner == clonRick);

/**
 * Crea el objeto universo
 */
let universo = new universeModules.Universe();

console.assert(universo);
console.assert(Object.getPrototypeOf(universo) != Array.prototype);
console.assert(universo.length == 0);

/**
 * Crea la primera dimensión, el `Array` mundo `Tierra`,
 * mete en él a los 6 objetos que has creado (Rick, Morty y Jerry,
 * 2 rick-clones y 1 clon de Morty) y añádelo al objeto `universo`.
 */
universo.addReality("Tierra");
var tierra = [];
tierra.push(protoRick, protoMorty, clonRick, otroRick, clonMorty, jerry);
universo["Tierra"] = tierra;

console.assert(tierra);
console.assert(Object.getPrototypeOf(tierra) == Array.prototype);
console.assert(tierra.length == 6);
console.assert("Tierra" in universo);
console.assert(universo.length == 1);

/**
 * Crea el objeto portal gun / pistola de portales.
 *
 * Dale la pistola al protoRick para que la dispare.
 * Pon a la tierra en el principio del historial de dimensiones de la pistola.
 *
 * Rick dispara la pistola y se añade al universo la dimensión "Fart"
 *  */
let gun = new gunModules.portalgun();
protoRick.takeTheGun(gun);
protoRick.gun.addToHistorial("Tierra");

console.assert(gun);
console.assert(gun.historial.length == 1);

protoRick.gun.shoot(universo, "Fart");

console.assert("Fart" in universo);
console.assert(universo.length == 2);

/**
 * Todos SALVO Jerry cruzan a la dimensión "Fart".
 * Has de eliminarlos del mundo tierra y meterlos en la nueva dimensión "Fart".
 *
 * Es necesaria una función cruzarDimension para ser reutilizada posteriormente.
 * Puedes situarla en aquel componente que estimes más adecuado.
 *
 * La pistola añade a su historial "Fart".
 */
universo.cruzarDimension([protoRick, protoMorty, clonRick, otroRick, clonMorty], universo["Tierra"], universo["Fart"]);

console.assert(universo["Fart"].length == 5);
console.assert(universo["Tierra"].length == 1);
console.assert(gun.historial.length == 2);

/**
 * Si haces un scan de la pistola, se muestra en consola
 * la lista de dimensiones, desde la más reciente a la más
 * antigua: Fart, Tierra.
 */

gun.scan();
console.assert(gun.historial.length == 2);


/**
 * Rick dispara la pistola y se añade al universo la dimensión "Coaches".
 */
protoRick.gun.shoot(universo, "Coach");

console.assert("Coach" in universo);
console.assert(universo.length == 3);

/**
 * Los cinco cruzan a la dimensión "Coach".
 *
 * Has de eliminarlos del mundo "Fart" y meterlos en la nueva dimensión "Coach".
 *
 * La pistola añade a su historial "Fart".
 *
 * Si haces un scan de la pistola, se muestra en consola
 * Coaches, Fart, Tierra.
 */
universo.cruzarDimension([protoRick, protoMorty, clonRick, otroRick, clonMorty], universo["Fart"], universo["Coach"]);

console.assert(universo["Coach"].length == 5);
console.assert(universo["Fart"].length == 0);
console.assert(universo["Tierra"].length == 1);
gun.scan();
console.assert(gun.historial.length == 3);

/**
 * Crea un Doofus Rick segun se indica en el README
 */
let doofus = new doofusModules.doofusRick();
doofus = Object.assign(jerry, doofus);
doofus = Object.assign(clonRick, doofus);
doofus.monedas = doofus.getMonedas();

console.assert(doofus);
console.assert(doofus.id == "J-19-Z7");
console.assert(doofus.ondas == "altas");
console.assert(doofus.monedas.length == 4);
console.assert(doofus.speak() == "Tengo una colección de monedas antiguas raras!");
