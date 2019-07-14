var SingletonMrMeeseek = function() {
    if ( SingletonMrMeeseek.prototype.instance ) {
        return SingletonMrMeeseek.prototype.instance;
    }
    SingletonMrMeeseek.prototype.instance = this;
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!", "Yes sireee!", "Oh, yeah!, Yes, ma'am!"];
    this.speakOnCreate = function () {
        console.log(this.messageOnCreate);
    };
    this.speakOnRequest  = function () {
        console.log(this.messageOnRequest[Math.floor(Math.random() * this.messageOnRequest.length)]);
    };
    this.makeRequest = function (request, realidad) {
        if (request != "reducir en dos golpes") {
            this.speakOnRequest();
            realidad.splice(0, 1);
        }
    }
};

module.exports = {
    mrMeeseeks: SingletonMrMeeseek
};