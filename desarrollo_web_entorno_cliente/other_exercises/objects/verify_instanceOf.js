//instanceOf, verificar que el objeto myHouse sea una instancia del constructor House.
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// instanceOf
let myHouse = new House (4)
myHouse instanceof House;
console.log(myHouse instanceof House);

//
function Dog(name) {
    this.name = name;
}
//-------------------------------------------------------------------------------
// Verificar si es una instancia del constructor. Preferiblemente usar instanceOf
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}
console.log(joinDogFraternity('candidate'));

