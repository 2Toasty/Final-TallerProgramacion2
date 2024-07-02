import Validador from "./Validador.js";

class TemperaturasModelMemory {
    constructor() {
        this.temperaturas = [
          {id:1,temperatura:45},
          {id:2,temperatura:76},
          {id:1,temperatura:45},
          {id:3,temperatura:76},
          {id:1,temperatura:76},
          {id:4,temperatura:45},
          {id:2,temperatura:23},
          ];

        this.validador = new Validador()
    }

    getTemperaturas = async () => {
      const temperaturas = this.temperaturas
      return temperaturas;
    }

    postTemperatura = async (dato) => {
      const sondaValida = this.validador.validarSonda(dato.id);
      const tempValida = this.validador.validarTemperatura(dato.temperatura);
      if (sondaValida && tempValida) {
          dato.fechaHora = new Date().toISOString(); 
          this.temperaturas.push(dato);
          return dato;
      } else {
          return "Datos inválidos";
      }
 
    }

    getTemperaturasSonda = async (id) => {
      const sondaValida = this.validador.validarSonda(id)
      if(sondaValida){
        return await this.temperaturas.filter((sonda) => sonda.id === id)
      } else {
        return "Número de sonda incorrecto"
      }
    }

    getInfoEstadistica = async () => {
 
      const cantTotalMuestras = this.temperaturas.length;
      const temperaturaSondas = {};
  
      this.temperaturas.forEach((muestra) => {
          const sondaId = muestra.id;
          if (!temperaturaSondas[sondaId]) {
              temperaturaSondas[sondaId] = { cantidad: 0, totalTemperatura: 0 };
          }
          temperaturaSondas[sondaId].cantidad++;
          temperaturaSondas[sondaId].totalTemperatura += muestra.temperatura;
      });
  
      for (const sondaId in temperaturaSondas) {
          temperaturaSondas[sondaId].promedio = Math.round(temperaturaSondas[sondaId].totalTemperatura / temperaturaSondas[sondaId].cantidad);
          delete temperaturaSondas[sondaId].totalTemperatura;
      }
  
      return {
          estadisticas: {
              cantidadTotalMuestras: cantTotalMuestras,
              temperaturaSondas: temperaturaSondas
          }
      };
    }

  }
  
  export default TemperaturasModelMemory;