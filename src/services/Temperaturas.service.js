import ModelFactory from "../models/DAO/Factory.js";
import config from "../../config.js";

class TemperaturasServices {
    constructor() {
      this.model = ModelFactory.get(config.PERSISTENCE);
    }
  
    getTemperaturas = async () => {
      const Temperaturas = await this.model.getTemperaturas();
      return Temperaturas;
    };
  
    postTemperatura = async (nuevoTemperatura) => {
      const retorno = await this.model.postTemperatura(nuevoTemperatura)
      return retorno
    };

    getTemperaturasSonda = async (id) => {
      const retorno = await this.model.getTemperaturasSonda(id)
      return retorno
    }

    getInfoEstadistica = async () => {
      const retorno = await this.model.getInfoEstadistica()
      return retorno
    }

  }
  
  export default TemperaturasServices;