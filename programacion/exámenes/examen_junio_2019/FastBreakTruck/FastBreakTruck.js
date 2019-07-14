const plumbusModule = require('../Desayuno/Productos/Plumbus');
const ItemModule = require('../Desayuno/Item');
const plumbus = new plumbusModule.Plumbus();
let juguete = new ItemModule.Item(plumbus);

var SingletonFastBreakTruck = function() {
    if ( SingletonFastBreakTruck.prototype.instance ) {
        return SingletonFastBreakTruck.prototype.instance;
    }
    SingletonFastBreakTruck.prototype.instance = this;
    this.prepararEyeHoles = function (desayunoEyeDes) {
        this.desayunoEyeDes = desayunoEyeDes;
    },
    this.prepararSmiggles = function (desayunoSmigDes) {
        this.desayunoSmigDes = desayunoSmigDes;
    }
};

module.exports = {
    SingletonFastBreakTruck
};