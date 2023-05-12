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

//HERENCIA DE OBJETOS (La clase Autobus hereda las propiedades de la clase Coche)
class Autobus extends Coche {
    constructor(modelo, velocidad, antiguedad, altura){
        super(modelo, velocidad, antiguedad);
        this.altura = altura;
        this.capacidad = 50;
    }

}

//Creando el objeto Autobus a partir de la clase heredada 
var autobus1 = new Autobus('Mercedes', 240, 2019, 3.5);
document.write("<h1>Capacidad del Bus es " + autobus1.capacidad + " en marca " + autobus1.modelo + " con altura de " + autobus1.altura + " metros</h1>");