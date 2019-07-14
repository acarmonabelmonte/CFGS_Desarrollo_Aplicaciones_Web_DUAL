// Módulo para crear estructura principal del body con clases bootstrap

function createStructure() {

    // Creamos el main, el contenedor que guardará nuestros elementos principales
    let container = document.createElement("div");
    container.className = "container-fluid";
    container.style.maxWidth = "60%";
    container.style.margin = "auto";
    document.body.appendChild(container);

    // Se crea el div padre para almacenar toda la info de shoe
    let div = document.createElement("div");
    div.id = 'shoe';
    div.className = 'row';
    container.appendChild(div);

    // Creamos un div para almacenar la imagen 
    let divImg = document.createElement("div");
    divImg.id = "shoeImg"
    let img = document.createElement("img");
    img.className = "img-fluid";
    img.setAttribute("src", "https://www.soleretriever.com/wp-content/uploads/2019/02/Sacai-x-Nike-LDV-Waffle-BV0073-400-Raffle-Guide-Sole-Retriever-3.jpg");
    img.setAttribute("alt", "Zapato");

    // y otro para la info texto
    let divShoe = document.createElement("div");
    divShoe.id = "shoeInfo"
    
    // Asignamos clases columna bootstrap
    divImg.className = 'col-md-6';
    divShoe.className = 'col-md-6';

    div.appendChild(divImg);
    divImg.appendChild(img);
    div.appendChild(divShoe);

    // Creamos un div para cargar las rifas
    let rifas = document.createElement("div");
    rifas.id = "rifas";
    rifas.className = "row";
    container.appendChild(rifas);
};

export { createStructure }; 