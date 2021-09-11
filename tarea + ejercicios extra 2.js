

// Ejercicio 9
function nuevoUsuario(nombre, email, password) {
    /* Crea un nuevo objeto con las propiedades coinicidiendo con los argumentos que se pasan
    a la función */
    // Devuelve el objeto
    // Tu código:
    const nuevouser = {
        nombre: nombre,
        email: email,
        password: password
    }
    return nuevouser
}
console.log(nuevoUsuario('Gustavo Gonzalez', 'hola@jesui.com', 'Noes123456'))
​
// Ejercicio 10
function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contrario, devuelve "false"
    // Tu código:
    const user = {
        email : "hola@hotmail.com"
    }
    if(user.email.length !== 0){
        return true
    }
    else {
        return false
    }
}
console.log(tieneEmail())

// Ejercicio 11
function verificarPassword(password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto usuario.
    // Devuelve "true" si coinciden.
    // De lo contrario, devuelve "false"
    // Tu código:
    const usuario = {
        password : "a1b2c3d4"
    }
    if(password === usuario.password){
        return true
    }
    else {
        return false
    }
}
console.log(verificarPassword("aaa"))
​
// Ejercicio 12
function actualizarPassword(nuevaPassword) {
    let usuario = {
        password : "a1b2c3d4"
    }
    usuario.password = nuevaPassword;
    return usuario
}
console.log(actualizarPassword("222s55as5s4"))
​
// Ejercicio 13
function agregarAmigo(nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:
    let usuario = {
        amigos : ['Juan', 'Carlos', 'Censurado']
    }
    usuario.amigos.push(nuevoAmigo)
    return usuario
}
console.log(agregarAmigo('Miguel'))
​
// Ejercicio 14
// Crear una clase con 3 propiedades.
// Crear 2 objetos hijos que extiendan de esa clase, y a cada uno agrearle una propiedad nueva.
​
class Perro {
    constructor(raza, color, altura, peso, pelaje){
        this.raza = raza;
        this.color = color;
        this.altura = altura; 
        this.peso = peso;
        this.pelaje = pelaje;
    }
}
class BorderCollie extends Perro{
    constructor(raza, color, temperamento, pH){
        super(raza, color)

        this.temperamento = temperamento;
        this.pH = pH;
    }
}
class Caniche extends Perro{
    constructor(raza, altura, capacidadDePerderse, ladrido){
        super(raza, altura)
        
        this.capacidadDePerderse = capacidadDePerderse;
        this.ladrido = ladrido;
    }
}





/*
    - Desafío - Ejercicios especiales -
​
    Al igual que la clase pasada, los ejercicios especiales son un
    desafío adicional de mucha mayor dificultad para poner a prueba sus
    habilidades autodidactas y de investigación.
    No necesitan hacerlos si no lo desean, pero considero que va a ampliar
    mucho sus capacidades resolutorias.
​
    Vamos a ellos:
​
    * Desafío N°1 *
    Programa una función que devuelva un número aleatorio entre 701 y 800.
    
    
    * Desafío N°2 *
    Programa una función que reciba un número y evalúe si es capicúa o no 
    (que se lee igual en un sentido que en otro), miFuncion(2002) devolverá true.
*/

function aleatorizacion(min, max){
    return Math.floor(Math.random() *(max - min)) + min;
    
}
let valor = aleatorizacion(701, 800);
console.log(valor)

function palindromeame(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
        }
    }
    return true;
}
console.log(palindromeame("ANITA LAVA LA TINA"))



​
/* 
    - Comentarios adicionales -
​
    Como habrá notado, la tarea de esta clase ha escalado considerablemente en dificultad. Son
    pocos los ejercicios que podrán hacer sin al menos investigar algún concepto o algún método.
    ¿Por qué sucede esto?
    Por que en programación, cada nueva aplicación, cada nueva website, cada nuevo proyecto que
    hagan les va a demandar conocimientos que no tienen, métodos que nunca usaron y hasta capaz
    ni conocen, librerías que jamás usaron y capaz jamas escucharon nombrar, mucha documentación,
    etc.
    Por este motivo, considero importante empezar a entrenarlos un poco en el arte de investigar.
​
    Se que esta tarea les va a llevar mas tiempo que las anteriores, y se que muchos capaz no
    tengan el tiempo necesario para resolverla toda, pero no importa, resuelvan hasta donde
    puedan, lo importante es que se lancen a la cacería de información.
    Y si algún ejercicio no les sale, cuando me envien la tarea manden igual esos ejercicios
    hasta donde los tengan por que tal vez pueda darles alguna pista de como avanzar.
​
    Prefiero que empiecen a golpearse un poquitito la cabeza ahora a que resuelvan todo así 
    nomás y que, cuando tengan que resolver con el tiempo ajustado en alguna empresa, no tengan
    esta habilidad autodidacta de investigación desarrollada.
​
    Confíen en mi, va a valer la pena.
​
    Ahora sin más, los dejo trabajar tranquilos. 
​
    A seguir con ese entusiasmo que esta es la última clase de Tipos de Datos compuestos y ya
    nos metemos en el mundo de la Asincronía!!
*/
