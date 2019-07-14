let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Create a mixin that allow other objects to use a collection of fuctions
let glideMixin = function(obj) {
    obj.glide = function() {
        return "Gliding, ooooh";
    }
};

//The glide function is assigned to the different objects
glideMixin(bird);
glideMixin(boat);

console.log(bird.glide());
console.log(boat.glide());