alert('Hola mundo desde el main.js');

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
for (var i = 1992; i <= 2023; i++) {
    //bloque de instrucciones
    datos.innerHTML += "<h3>Estamos en el año " + i + "</h3>";
}