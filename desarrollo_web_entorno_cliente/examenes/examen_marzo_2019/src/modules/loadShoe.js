import { shoe } from '../../data/raffles';

function loadShoe() {

    let divShoe = document.querySelector("#shoeInfo");
    let model = document.createElement("h1");
    model.innerHTML = shoe.model;
    divShoe.appendChild(model);

    let colour = document.createElement("h2");
    colour.innerHTML = shoe.colour;
    divShoe.appendChild(colour);

    let description = document.createElement("h3");
    description.innerHTML = shoe.code + ' | ' + shoe.avaliable + ' | ' + shoe.price;
    divShoe.appendChild(description);
    
};

export { loadShoe };