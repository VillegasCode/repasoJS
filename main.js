alert('Hola mundo desde el main.js');

//vatiables
var nombre = "Alex Villegas";
var altura = 175;

var concatenacion = nombre + " " + altura;

// document.write(concatenacion);

var datos = document.getElementById("datos");
// datos.innerHTML = concatenacion;

datos.innerHTML = `
     <h1>Soy la caja de datos</h1>
     <h2>Mi nombre es: ${nombre}</h2>
     <h3>Mido: ${altura} cm</h3>
`;