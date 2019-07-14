const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
};

// Bad Code

function feedFirst(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
};

// // Good Code

function feedSecond({name, meal, diet}) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
};

function feedThird(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
};
