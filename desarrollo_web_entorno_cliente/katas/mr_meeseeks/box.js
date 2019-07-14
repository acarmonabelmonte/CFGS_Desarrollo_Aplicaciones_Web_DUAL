//Imports
const meeseekModules = require('./mrMeeseek');

var SingletonBox = function() {
    if ( SingletonBox.prototype.instance ) {
        return SingletonBox.prototype.instance;
    }
    SingletonBox.prototype.instance = this;
    this.protoMeeseek = new meeseekModules.mrMeeseeks();
    this.pressButton = function (realidad) {
        let meeseek = this.createMeeseek();
        meeseek.speakOnCreate();
        realidad.unshift(meeseek);
    };
    this.createMeeseek = function () {
        let newMeeseek = Object.create(this.protoMeeseek);
        return newMeeseek;
    };
};

module.exports = {
    MeeseeksBox: SingletonBox
};

