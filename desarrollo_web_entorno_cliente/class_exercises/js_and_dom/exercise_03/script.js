window.onload = function() {
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

  // Your code here
  var tabla = document.createElement("table");
  tabla.setAttribute("border", "2");
  var mountains = document.getElementById("mountains");
  mountains.appendChild(tabla);

  function getMountains(item,index) {
  var fullname =    "<tr>" +      
                        "<td>" + item.name + "</td>" +
                        "<td>" + item.height + "</td>" +
                        "<td>" + item.height + "</td>" + 
                    "</tr>";
                
  return fullname;
  }

  function myFunction() {
    tabla.innerHTML = MOUNTAINS.map(getMountains);
  }

  myFunction();

  /*
  You can use document.createElement to create new element nodes, 
  document.createTextNode to create text nodes, and the appendChild method
   to put nodes into other nodes.
  You’ll want to loop over the key names once to fill in the top row and then
   again for each object in the array to construct the data rows. To get an array
    of key names from the first object, Object.keys will be useful.

  To add the table to the correct parent node, you can use document.getElementById
  or document.querySelector to find the node with the proper id attribute.
  */
};
