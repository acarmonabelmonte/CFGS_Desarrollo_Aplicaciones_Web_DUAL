function escape(carpark){
  for (var i = 0; i < carpark.length; ++i) {
	  for (var j = 0; j < carpark[i].length; ++j)
	    if (carpark[i][j] == 2) {
	    	var nivel = i;
	    	var position = j;
	    }
	}
}


console.assert(escape([[1, 0, 0, 0, 2],
					   [0, 0, 0, 0, 0]]) === ["L4", "D1", "R4"]);

console.assert(escape([[2, 0, 0, 1, 0],
					   [0, 0, 0, 1, 0],
					   [0, 0, 0, 0, 0]]) === ["R3", "D2", "R1"]);

console.assert(escape([[0, 2, 0, 0, 1],
					   [0, 0, 0, 0, 1],
					   [0, 0, 0, 0, 1],
					   [0, 0, 0, 0, 0]]) === ["R3", "D3"]);

console.assert(escape([[1, 0, 0, 0, 2],
					   [0, 0, 0, 0, 1],
					   [1, 0, 0, 0, 0],
					   [0, 0, 0, 0, 0]]) === ["L4", "D1", "R4", "D1", "L4", "D1", "R4"]);

console.assert(escape([[0, 0, 0, 0, 2]]) === []);