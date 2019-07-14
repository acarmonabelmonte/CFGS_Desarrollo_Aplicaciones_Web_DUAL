window.onload = function() {
    var info = document.createElement("div");
    info.style.marginLeft = "10px";
    var infoTittle = document.createElement("h2");
    infoTittle.innerHTML = "Informacion sobre la pagina:";
    var infoList = document.createElement("ul");

    document.body.insertBefore(info, document.body.firstChild);

    info.appendChild(infoTittle);
    info.appendChild(infoList);

    // Contar total enlaces página:
    var enlaces = document.getElementsByTagName("a");
    var totalEnlaces = "El número total de enlaces es: " + enlaces.length;

    // Contar total párrafos página:
    var parrafos = document.getElementsByTagName("p");
    var totalParrafos = "El número total de párrafos es: " + parrafos.length

    // Dirección a la cual redirige el penúltimo enlace:
    var penultimoEnlace = "Dirección del penúltimo enlace: " + enlaces[enlaces.length -2].href;

    // Dirección a la cual redirige el último enlace:
    var ultimoEnlace = "Dirección del último enlace: " + enlaces[enlaces.length -1].href;

    // Número de enlaces que redirigen a http://www.jurassicpark.com:
    var contador = 0;
    for(var i=0; i<enlaces.length; i++) {
        if(enlaces[i].href == "http://www.jurassicpark.com" || enlaces[i].href == "http://www.jurassicpark.com/") {
        contador++;
        }
    };

    var enlacesRepetidos = "Número de enlaces que redirigen a http://www.jurassicpark.com: " + contador;

    // Número de enlaces de todos los párrafos:
    var contEnlaces = 0;
    for(var i=0; i<parrafos.length; i++) { 
        contEnlaces +=parrafos[i].getElementsByTagName("a").length;
    };

    var enlacesParrafos = "Número de enlaces de todos los párrafos: " + contEnlaces;

    // Crear elemento de la lista:
    function createListItem (text) {
        var li = document.createElement("li");
        li.style.fontSize = "18px";
        li.innerHTML = text;
        return li;
    }
    
    // Agregar elementos hijo a elemento padre:
    function appendChildren (parent, children) {
        children.forEach (function(child) {
            parent.appendChild(child);
        })
    }

    myInfoList = [
        createListItem(totalEnlaces),
        createListItem(totalParrafos),
        createListItem(penultimoEnlace),
        createListItem(ultimoEnlace),
        createListItem(enlacesRepetidos),
        createListItem(enlacesParrafos)
    ];
    
    appendChildren(infoList, myInfoList)
};
