function obtenerMayor(x, y) {
    if (x > y) {
        return console.log(x)
    } else {
        return console.log(y)
    }
}
obtenerMayor(1, 0)

function saludo(idioma) {
    switch(idioma) {
        case "aleman":
            return console.log("Guten Tag!")
            break;
        case "mandarin":
            return console.log("Ni Hao!")
            break;
        case "ingles":
            return console.log("Hello")
            break;
        default:
            return console.log("Hola!")
            break;
    }
}
saludo()

function esDiezCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    if(numero === 10 || numero === 5){
        return console.log(true)
    }
    else {
        return console.log(false)
    }
}
esDiezCinco(5)

function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero < 50 && numero > 20){
        return console.log(true)
    }
    else{
        return console.log(false)
    }
}
estaEnRango(49)

function esEntero(numero) {

    if(numero%1 === 0){
        return console.log(true)
    }
    else if(numero%1 !== 0){
        return console.log(false)
    }
}
esEntero(13)

function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisisble entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzBuzz"
    // De lo contrario, devuelve el número
    if(numero%3 === 0 && numero%5 !== 0){
        return console.log("fizz")
    }
    else if(numero%3 !== 0 && numero%5 === 0){
        return console.log("buzz")
    }
    else if(numero%3 === 0 && numero%5 === 0){
        return console.log("fizzBuzz")
    }
    else{
        return console.log(numero)
    }
}
fizzBuzz(8)


function devolverPrimerElemento(array) {
    // Devuelve el primero elemento de un array
    // Tu código:
    array = ['Hubo ', 'Un ', 'Mañana'];
    return console.log(array[0]);
}
devolverPrimerElemento();

function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    array = [1, 3, 5, 7, 15, 25];
    return console.log(array.length);
}
obtenerLargoDelArray();

function incrementarPorUno(array) {
    // "array" debe ser una matriz de números enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    array = [1, 5, 7, 25, 36];
    for (let i = 0; i < array.length; i++) {
       array[i] = array[i]+1;
    }
    console.log(array);
}
incrementarPorUno();

function dePalabrasAFrase(palabras) {
    let nuevomensaje = '';
    palabras = ['Este', 'es', 'un', 'nuevo', 'mensaje'];
    for (let i = 0; i < palabras.length; i++) {
        nuevomensaje = palabras[i] + " ";
    }
    console.log(nuevomensaje);
}
​dePalabrasAFrase();

function arrayContiene(elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:
    
    var array = [1, 3, 50, 26];
    if(array.indexOf(elemento)!== -1){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
arrayContiene(50)


function esPrimo(numero){
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}
console.log(esPrimo(8))


/* 
    *Desafío N°1 *
​
    Programa una función que te devuelva el texto recortado según el número de 
    caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 
*/
function recorte(frase, caracteres) {
    var verso = frase;
    console.log(verso.slice(0, caracteres));
}
recorte("Hola mis nuevos amigos!", 1)

/* 
    * Desafío N°2*
​
    Programa una función que dada una String te devuelva un Array de textos separados 
    por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
function cercename(frase, caracter){
    let nuevafrase = frase.split(caracter)
    console.log(nuevafrase)
}
cercename("hola otra vez usted aqui", " ")

/*
    * Desafío N°3 *
​
    Deberás programar una función que invierta las palabras de una cadena de texto, 
    miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
function alVesre(frasedenuevo){
    let nuevafraaase = frasedenuevo;
    let asee = nuevafraaase.split('').reverse().join('');
    console.log(asee);
}
alVesre("Que tal mundo!")
