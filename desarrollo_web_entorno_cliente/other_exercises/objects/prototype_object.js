/*Protoype object*/
/*Constructor*/
function Dog(name) {
    this.name = name;
}

/*Instancia Dog*/
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;

console.log(beagle.numLegs);