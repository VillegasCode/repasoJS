class Coche {
    //Un constructor almacena las propiedades del objeto
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    //Los métodos son las acciones que el objeto puede realizar
    aumentarVelocidad(){
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }
}

//Creando 4 Objetos a partir de la clase constructora
var coche1 = new Coche('Volkswagen', 240, 2015);
var coche2 = new Coche('Audi', 241, 2018);
var coche3 = new Coche('Mercedes Benz', 270, 2020);
var coche4 = new Coche('BMW', 280, 2016);

document.write("<h1>" + coche3.modelo + " va a " + coche3.velocidad + "</h1>");
coche3.aumentarVelocidad();
coche3.aumentarVelocidad();
coche3.aumentarVelocidad();
coche3.aumentarVelocidad();

document.write("<h1>Aumentó su velocidad el " + coche3.modelo + " a " + coche3.velocidad + "</h1>");