class Conductor{
    nombre;
    #licencia;

    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
        this.rutas = [];
    } 

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`Ruta '${ruta}' asignada a ${this.nombre}.`);
    }

    obtenerInformacionConductor() {
        return {
            nombre: this.nombre,
            licencia: this.#licencia,
            rutas: this.rutas
        };
    }
}

class Vehiculo{
    modelo;
    #placa;
    tipoVehiculo;
    constructor(modelo, placa, tipoVehiculo){
        this.modelo = modelo;
        this.placa = placa;
        this.tipoVehiculo = tipoVehiculo;
        this.conductor = null;
    }

    asignarVehiculo(conductor){
        this.conductor = conductor;
        console.log(`Conductor asignado al vehículo ${this.modelo} con placa: (${this.#placa})|| Tipo de vehiculo:.`);
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia) {
        super(nombre, licencia);
        this.vehiculoElegido = null;
    }

    asignarVehiculoElegido(vehiculo) {
        this.vehiculoElegido = vehiculo;
        console.log(`Vehículo eleigod por el conductor VIP: ${vehiculo.modelo} (${vehiculo.placa}).`);
    }

    registrarRuta(ruta) {
        super.registrarRuta(ruta);
        console.log(`Ruta registrada del conducto VIP -> ${this.nombre}.`);
    }
}

const conductor1 = new Conductor("Andre Limaico", "X-171427-X");
const vehiculo1 = new Vehiculo("Mazda CX3", "PQD-488", "SUV");
const conductorVIP1 = new ConductorVIP("jose Lizarzaburu", "X-142890-X");

conductor1.registrarRuta("Ruta Alborada");
vehiculo1.asignarVehiculo(conductor1);

conductorVIP1.registrarRuta("Ruta La Carolina VIP");
conductorVIP1.asignarVehiculoElegido(vehiculo1);