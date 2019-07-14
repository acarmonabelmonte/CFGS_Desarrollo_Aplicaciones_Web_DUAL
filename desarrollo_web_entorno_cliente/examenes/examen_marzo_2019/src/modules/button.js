function assignButton(rifa, into) {
    // Crear botón que dirige a url al pulsar
    var boton = document.createElement("button");
    boton.href = rifa.url;
    boton.onclick = function () {
        window.location.href = this.href;
    };

    boton.innerHTML = "ENTER RAFFLE";

    if (rifa.Closes === 'closed') {
        boton.className = "btn btn-danger";
        boton.innerHTML = "CLOSED";
    } else {
        if (rifa.Opens === 'announced') {
            boton.className = "btn btn-secondary";
            boton.innerHTML = "ANNOUNCED";
        } else {
            boton.className = "btn btn-success";
        };
    };
    
    into.appendChild(boton);
};

export { assignButton };