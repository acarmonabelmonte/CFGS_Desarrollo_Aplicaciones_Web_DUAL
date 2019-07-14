window.onload = function () {
    
    var boton = document.getElementById('addCategory');
    var botonDeleteAll = document.getElementById('deleteAll');
    var saveInfo = document.getElementById('infoSave');
    var nombreCategoria = document.getElementById('categoria');
    var listadoTareas = document.getElementById("lista");
    var newOption = document.createElement("option");
    var tareaText = document.getElementById('tarea');

    function store() {
        window.localStorage.myitems = listadoTareas.innerHTML;
    };

    boton.onclick = function agregarCategoria() {
        if (nombreCategoria.value === "") {
            alert("Todavía no ha insertado una categoría");
        } else {
            if (typeof (Storage) !== "undefined") {
                newOption.text = nombreCategoria.value;
                newOption.value = nombreCategoria.value;
                listadoTareas.add(newOption);
                store();
                getValues();

            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
        }

    };

    botonDeleteAll.onclick = function clearStorage(){
        localStorage.clear();
        alert("Has borrado todo");
        getValues();
    };

    saveInfo.onclick = function guardarTarea(){
        var index = listadoTareas.selectedIndex;
        var option = document.getElementsByTagName("option")[index].value
        localStorage.setItem(option, tareaText.value);
    };

    function getValues() {
        var storedValues = window.localStorage.myitems;
        if (!storedValues) {
            listadoTareas.innerHTML = '<option>Inserte categoría</option>';
        } else {
            listadoTareas.innerHTML = storedValues;
        }
    }
    getValues();
}