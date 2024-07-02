import fs from "fs";
import Validador from "./Validador.js";

class TemperaturasModelFs {
  constructor() {
    this.temperaturas = "Temperaturas.json";

    this.validador = new Validador();
  }

    traerTemperaturasJson = async () => {
      let data = await fs.promises.readFile(this.temperaturas, "utf-8")
      if(data === undefined || data === ""){
        data = []
      }else{data = JSON.parse(data)}
      return data;
    }

    actualizarTemperaturasJson = async (data) => {
      const newData = JSON.stringify(data)
      await fs.promises.writeFile(this.temperaturas,newData)
    }

    getTemperaturas = async () => {
      const temperaturas = await this.traerTemperaturasJson();
      return temperaturas;
    }

    postTemperatura = async (dato) => {
      const sondaValida = this.validador.validarSonda(dato.id);
      const tempValida = this.validador.validarTemperatura(dato.temperatura);
      if (sondaValida && tempValida) {
          const data = await this.traerTemperaturasJson();
          dato.fechaHora = new Date().toISOString(); 
          data.push(dato);
          await this.actualizarTemperaturasJson(data)
          return dato;
      } else {
          return "Datos inválidos";
      }
 
    }

    getTemperaturasSonda = async (id) => {
      const sondaValida = this.validador.validarSonda(id)
      if(sondaValida){
        const data = await this.traerTemperaturasJson();
        return await data.filter((sonda) => sonda.id === id)
      } else {
        return "Número de sonda incorrecto"
      }
    }

    getInfoEstadistica = async () => {
      const data = await this.traerTemperaturasJson();

      const cantTotalMuestras = data.length;
      const temperaturaSondas = {};
  
      data.forEach((muestra) => {
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
export default TemperaturasModelFs;
