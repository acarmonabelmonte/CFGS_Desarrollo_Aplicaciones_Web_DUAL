
/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") {
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // muestra números de 0 al 9
        }
    
        console.log(k);                 // muestra 10
    }
    
    console.log(j);                     // j su valor sigue siendo 0
}

o = {};
test(o);
