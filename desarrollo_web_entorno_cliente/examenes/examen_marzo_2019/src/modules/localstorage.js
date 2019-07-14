// Guardar marca en el localStorage
function saveMark(key, value) {
    localStorage.setItem(key, value);
};

// Cargar marca del localStorage
function loadMarks(key, mark) {
    let valor = localStorage.getItem(key);
    if (valor != undefined) {
        mark.innerHTML = valor;
    } else {
        mark.innerHTML = "Mark as entered";
        saveMark(key, mark.innerHTML)
    }
};

export { saveMark, loadMarks };