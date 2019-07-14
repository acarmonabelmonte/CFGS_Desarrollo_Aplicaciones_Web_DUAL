/*
Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 9^2 is 81 and 1^2 is 1.
Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
  let square = [];
  for (var i=0; i < num.toString().length; ++i) {
  	var valor = parseInt(Math.pow(num.toString()[i], 2));
  	square.push(valor);
	}
	return parseInt(square.join(''));
}

console.assert(squareDigits(9119) === 811181);
