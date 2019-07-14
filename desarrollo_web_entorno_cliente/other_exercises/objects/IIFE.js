(function () {
    console.log("Chirp, chirp!");
})(); // this is an anonymous function expression that executes right away
// Outputs "Chirp, chirp!" immediately

/*Una expresión de función invocada inmediatamente (IIFE) se usa a menudo para agrupar la funcionalidad relacionada
en un solo objeto o módulo. Por ejemplo:*/
let funModule =(function () {
    return {
        isCuteMixin : function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin : function(obj) {
            obj.sing = function() {
                return "Singing to an awesome tune";
            };
        }
    }
}) ();

//Creamos un objeto Dog
function Bird(name) {
    this.name = name;
}

//verificamos
let pajarico = new Bird("Snoopy");
funModule.isCuteMixin(pajarico);
funModule.singMixin(pajarico);
console.log(pajarico.isCute());
console.log(pajarico.sing());