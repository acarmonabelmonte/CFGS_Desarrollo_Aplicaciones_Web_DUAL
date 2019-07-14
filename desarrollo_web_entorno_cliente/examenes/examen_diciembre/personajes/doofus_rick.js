var SingletonDoofus = function() {
    if ( SingletonDoofus.prototype.instance ) {
        return SingletonDoofus.prototype.instance;
    }
    SingletonDoofus.prototype.instance = this;
    this.id = "J-19-Z7";
};
module.exports = {
    doofusRick: SingletonDoofus
};