var productos = {

    "Smiggles": {
        "img": "...",
        pvp: 50,
        tipo: 'Cereales',
        empaquetado: 'Caja'
    },
    "TurbulentJuice": {
        "img": "...",
        pvp: 30,
        tipo: 'Bebida',
        empaquetado: 'Tubo'

    },
    "Eyeholes": {
        "img": "...",
        pvp: 25,
        tipo: 'Cereales',
        empaquetado: 'Caja'
    },
    "FleebJuice": {
        "img": "...",
        nombre: 'Fleeb Juice',
        pvp: 35,
        tipo: 'Bebida',
        empaquetado: 'Tubo'
    }
}


window.onload = function () {
    
    createStructure();

    //Función para crear estructura principal del body con clases bootstrap
    function createStructure() {

        // Creamos el main, el contenedor que guardará nuestros elementos principales
        let container = document.createElement("div");
        container.className = "container-fluid";
        container.style.maxWidth = "60%";
        container.style.margin = "auto";
        document.body.appendChild(container);

        // Se crea el div padre para almacenar toda la info 
        let row = document.createElement("div");
        row.className = 'row';
        container.appendChild(row);

        // Se crea un título de cabecera para la página
        let header = document.createElement("h1");
        header.className = "text-center";
        header.innerHTML = "Selecciona un desayuno";
        row.appendChild(header);

        loadProducts();
    } 

    // Cargar info raffles
    function loadProducts() {
        for (i in productos) {
            let product = document.createElement("div");
            product.id = i;
            document.body.appendChild(product);
            
            // Botón
            var boton = document.createElement("button");
            boton.className = "btn btn-succes";
            boton.innerHTML = "Seleccionar";
            boton.onclick = function () {
                console.log(product.id)
            };
            product.appendChild(boton)
        }
    }
}