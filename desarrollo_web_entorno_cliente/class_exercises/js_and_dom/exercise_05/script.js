window.onload = function() {
    var info = document.createElement("div");
    info.style.marginLeft = "10px";
    var infoTittle = document.createElement("h2");
    infoTittle.innerHTML = "LISTADO DE IMGS:";
    var infoList = document.createElement("ul");

    document.body.insertBefore(info, document.body.firstChild);

    info.appendChild(infoTittle);
    info.appendChild(infoList);

    myInfoList = [];

    for (let i = 0; i < document.images.length; i++) {
        myInfoList.push(createListItem(document.images[i].alt));
    };

    function createListItem (text) {
            var li = document.createElement("li");
            li.style.fontSize = "18px";
            li.innerHTML = text;
            return li;
    };
        
    function appendChildren (parent, children) {
        children.forEach (function(child) {
            parent.appendChild(child);
        })
    };
    
    appendChildren(infoList, myInfoList);

};