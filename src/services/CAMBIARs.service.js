import ModelFactory from "../models/DAO/Factory.js";
import config from "../../config.js";

class LibrosServices {
    constructor() {
      this.model = ModelFactory.get(config.PERSISTENCE);
    }
  
    getLibros = async () => {
      const libros = await this.model.getLibros();
      return libros;
    };
  
    postLibro = async (nuevoLibro) => {
      const retorno = await this.model.postLibro(nuevoLibro)
      return retorno
    };

    // getVotosPorZona = async (zona) => {
    //   const votos = await this.model.getVotosPorZona(zona)
    //   return votos
    // }

    // getVotosPorcentaje = async () => {
    //   return await this.model.getVotosPorcentaje()
    // }

    // getVotosTotales = async () => {
    //   const votos = await this.model.getVotosTotales()
    //   return votos
    // }
  }
  
  export default LibrosServices;