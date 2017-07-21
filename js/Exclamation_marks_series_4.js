// Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"


function remove(s){
  //coding and coding....
    var stringToConvert = s;
    var convertedArray  = [...stringToConvert];
   //La siguiente función realiza una comprobación y devuelve un valor booleano (verdadero/falso)
    function remove1(valor) {
         return valor !==  "¡" ;
    }
    function remove2(valor2) {
         return valor2 !==  "!" ;
    }
    //Aquellos valores del array para los cuales esSuficientementeGrande devuelva verdadero, será almacenados en una array de salida, sin modificar el array inicial
    var remove = convertedArray.filter(remove1);
    var removeDos = remove.filter(remove2);
    // filtered es el array [12, 130, 44]
   
    removeDos.push("!")
    
    var string = removeDos.join('');
    console.log(string);
}

remove("¡Hi!");


//Refactorizado
// function remove(s) {
//   return s.replace(/!+/g, '') + '!';
// }