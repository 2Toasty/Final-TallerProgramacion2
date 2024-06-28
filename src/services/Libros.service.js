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

    deleteLibro = async (codigo) => {
      const retorno = await this.model.deleteLibro(codigo)
      return retorno
    }

    patchAlquilarLibro = async (codigo) => {
      const retorno = await this.model.patchAlquilarLibro(codigo)
      return retorno
    }

    patchDevolverLibro = async (codigo) => {
      const retorno = await this.model.patchDevolverLibro(codigo)
      return retorno
    }

    patchNoaptearLibro = async (codigo) => {
      const retorno = await this.model.patchNoaptearLibro(codigo)
      return retorno}

    getDisponibles = async () => {
      const libros = await this.model.getDisponibles();
      return libros;
    };

    getNoAptos = async () => {
      const libros = await this.model.getNoAptos();
      return libros;
    };

    getAlquilados = async () => {
      const libros = await this.model.getAlquilados();
      return libros;
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