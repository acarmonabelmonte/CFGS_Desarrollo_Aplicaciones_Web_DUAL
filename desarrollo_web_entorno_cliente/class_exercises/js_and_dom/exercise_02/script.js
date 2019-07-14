window.onload = function() {
    var enlaces = document.getElementsByTagName("a");

    for(var i=0; i<enlaces.length; i++) {   
        if(enlaces[i].href == "http://www.iessonferrer.net" || enlaces[i].href == "http://www.iessonferrer.net/") {
            enlaces[i].href = "https://www.iessonferrer.net";
        }
    };

    var parrafos = document.getElementsByTagName("p");

    var importantes = document.querySelectorAll("p.importante, a.importante, span.importante");
    console.log(importantes);

    for(var i=0; i<importantes.length; i++) {   
        importantes[i].className = "resaltar";
        console.log(importantes[i]);
    };
};


