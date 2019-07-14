function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


let duck = new Bird();
let beagle = new Dog();
// Automáticamente hereda el constructor del superobjeto Animal
console.log(duck.constructor);
console.log(beagle.constructor);

//Le asignamos su propio constructor al objeto prototipado Bird y Dog
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

console.log(duck.constructor);
console.log(beagle.constructor);