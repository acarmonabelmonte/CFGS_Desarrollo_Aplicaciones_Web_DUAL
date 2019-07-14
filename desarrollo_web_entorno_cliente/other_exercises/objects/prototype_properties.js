function Dog(name) {
    this.name = name;
}
// Agregar varias propiedades prototipadas al objeto
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        return "ñam ñam ñam";
    },
    describe: function() {
        return "My name is " + this.name;
    }
};


let perrete = new Dog('Evaristo');

let ownProps = [];
/*Almacenar properties de canary en un Array*/
for (let property in perrete) {
    if(perrete.hasOwnProperty(property)) {
      ownProps.push(property);
  }
}
console.log(ownProps);
