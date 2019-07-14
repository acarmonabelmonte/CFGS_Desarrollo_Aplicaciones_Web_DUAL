const FastBreakTruckModules = require('./FastBreakTruck/FastBreakTruck');
const DesayunoModules = require('./Desayuno/Desayuno');
const SmigglesModule = require('./Desayuno/Productos/Smiggles');
const EyeHolesModule = require('./Desayuno/Productos/Eyeholes');
const FleebjuiceModule = require('./Desayuno/Productos/FleebJuice');
const TurbulentJuiceModule = require('./Desayuno/Productos/TurbulentJuice');
const ItemModule = require('./Desayuno/Item');

// Creamos el objeto FastBreakTruck como instancia única 
let fastBreakTruck = new FastBreakTruckModules.SingletonFastBreakTruck();

// Instanciamos los diferentes tipos de productos
let smiggles = new SmigglesModule.Smiggles();
let eyeholes = new EyeHolesModule.Eyeholes();
let fleebjuice = new FleebjuiceModule.FleebJuice();
let turbulentjuice = new TurbulentJuiceModule.TurbulentJuice();

// Creamos los items
let smigglesItem = new ItemModule.Item(smiggles);
let eyeholesItem = new ItemModule.Item(eyeholes);
let fleebjuiceItem = new ItemModule.Item(fleebjuice);
let turbulentjuiceItem = new ItemModule.Item(turbulentjuice);

/**
		 * Desayuno Eyeholes
		 */

		let desayunoEyeDes = new DesayunoModules.Desayuno(eyeholesItem, turbulentjuiceItem);
		console.log("\nNo abras la caja de Eyeholes!");
		fastBreakTruck.prepararEyeHoles(desayunoEyeDes.mostrarItems());
		fastBreakTruck.prepararEyeHoles(desayunoEyeDes.getCoste());

		/**
		 * Desayuno Smiggles
		 */
		
		let desayunoSmigDes = new DesayunoModules.Desayuno(smigglesItem, fleebjuiceItem);
		console.log("\nSmiggles per als nins!");
		fastBreakTruck.prepararSmiggles(desayunoSmigDes.mostrarItems());
		fastBreakTruck.prepararSmiggles(desayunoSmigDes.getCoste());

		/**
		 * Plumbus
		 */

		
		// fastBreakTruck.incluirJuguete(desayunoEyeDes);
		console.log("\nEyeholes con plumbus!");
		// fastBreakTruck.prepararEyeHoles(desayunoEyeDes.mostrarItems());
		// fastBreakTruck.prepararEyeHoles(desayunoSmigDes.getCoste());