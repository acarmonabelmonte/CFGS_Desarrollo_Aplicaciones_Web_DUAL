function Bird() {
    let weight = 15; //Propiedad privada
    this.getWeight = function() { // publicly available method that a bird object can use
        return weight;
    };
}
let ducky = new Bird();
console.log(ducky.getWeight());