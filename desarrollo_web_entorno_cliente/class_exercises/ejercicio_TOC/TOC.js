window.onload = function () {
    let toc = document.getElementById("TOC");
    if (!toc) {
        toc = document.createElement("div");
        toc.id = "TOC";
        document.body.insertBefore(toc, document.body.firstChild);
    }
    let headers = document.querySelectorAll("h1, h2, h3, h4");
    for (let i = 0; i < headers.length; i++) {
        headers[i].id = headers[i].tagName+i;
        let div = document.createElement("div");
        let link = document.createElement("a");
        link.innerText = headers[i].innerText;
        link.href = '#' + headers[i].tagName+i;
        let level = headers[i].tagName.substring(1);
        div.className = "TOCEntry TOCLevel" + level;
        let mySpan = document.createElement("span");

        div.appendChild(link);
        toc.appendChild(div);
    }
    console.log(document.querySelectorAll("h1, h2, h3, h4"));
    


};