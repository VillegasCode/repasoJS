//alert('Hola mundo desde el main.js');

//vatiables
var nombre = "Alex Villegas";
var altura = 185;

var concatenacion = nombre + " " + altura;

// document.write(concatenacion);

var datos = document.getElementById("datos");
// datos.innerHTML = concatenacion;

// Colocando texto y datos dentro de un DIV con JS y comillas simple
datos.innerHTML = `
     <h1>Soy la caja de datos</h1>
     <h2>Mi nombre es: ${nombre}</h2>
     <h3>Mido: ${altura} cm</h3>
`;

//Condicionales
if(altura >= 180){
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
} else if (altura < 180 && altura > 165) {
    datos.innerHTML += '<h1>Eres una persona de tamaño PROMEDIO</h1>';
} else {
    datos.innerHTML += '<h1>Eres una persona BAJA</h1>'
}


//BUCLE o ITERACIÓN
for (var i = 2014; i <= 2023; i++) {
    //bloque de instrucciones
    datos.innerHTML += "<h3>Estamos en el año " + i + "</h3>";
}

//funciones
function MuestraMiNombre(nombre, altura){
    var misDatos = `
        <h1>Soy la caja de datos de la funcion MuestraMiNombre</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;
    return misDatos;
}

//funcion imprimir en un div con html
function imprimir(){
    var misdatos = document.getElementById("misdatos");
    misdatos.innerHTML = MuestraMiNombre("Alex Villegas", 190);
}

imprimir();

//Arrays
var nombres = ['Victor', 'Antonio', 'Joaquin'];

document.write('<h1>LISTADO DE NOMBRES</h1>');

//Mostrar array con bucle FOR
document.write('<h1>Array con for loop</h1>');
for(i=0; i < nombres.length; i++){
    document.write(nombres[i] + '<br/>')
}

//Mostrar array con función anónima flecha
document.write('<h1>Array con función flecha con forEach</h1>');
nombres.forEach((nombre) => {
    document.write(nombre + '<br/>');
});

//Mostrar el mismo array con un forEach
document.write('<h1>Array con forEach + función anónima</h1>');
nombres.forEach(function(nombre){
    document.write(nombre + '<br/>');
});

//OBJETOS
var coche = {
    marca: "Volkswagen",
    modelo: "Jetta",
    Maxima: 240,
    Torque: 180,
    Antiguedad: 2014,

//Añadir método
    mostrarDatos(){
        console.log(this.modelo, this.Maxima, this.Antiguedad);
    },

    color: "blanco",
    ringnro: 17,
}

document.write("<h1> Marca: " + coche.marca + "</br> Modelo: " + coche.modelo + "</h1>");

console.log("Torque: " + coche.Torque);

coche.mostrarDatos();

//Crear PROMESA
var  saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales"
        //saludo = false;
        if (saludo){
            resolve(saludo);
        } else {
            reject("No hay saludo disponible");
        }
    }, 2000)
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});