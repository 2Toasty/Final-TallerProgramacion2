import LibrosServices from "../services/Libros.service.js";

class LibrosController {
    constructor() {
      this.services = new LibrosServices();
    }

    getLibros = async (req, res) => {
      
      try {
        const libros = await this.services.getLibros();
        res.send(libros);
      } catch (error) {
        res.status(500).send("No se pudo obtener información de los libros")
      }
      
    };

    postLibro = async (req,res) => {
      try {
        const {titulo,autor} = req.body
        if(!titulo || !autor){
          throw new Error("Falta el campo titulo o autor")
        }
        const retorno = await this.services.postLibro({titulo,autor})
        res.send(retorno)
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })
      }
      
    }

    deleteLibro = async (req,res) => {
      try {
        const {codigo} = req.body
        if(!codigo){
          throw new Error("Falta el campo código para buscar el libro")
        }
        const retorno = await this.services.deleteLibro(codigo)
        res.send(retorno)
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })
      }
      
    }

    patchAlquilarLibro = async (req,res) => {
      try {
        const {codigo} = req.body
        if(!codigo){
          throw new Error("Falta el campo código para buscar el libro")
        }
        const retorno = await this.services.patchAlquilarLibro(codigo)
        res.send(retorno) 
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })  
      }
    }

    patchDevolverLibro = async (req,res) => {
      try {
        const {codigo} = req.body
        if(!codigo){
          throw new Error("Falta el campo código para buscar el libro")
        }
        const retorno = await this.services.patchDevolverLibro(codigo)
        res.send(retorno) 
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })   
      }
    }

    patchNoaptearLibro = async (req,res) => {
      try {
        const {codigo} = req.body
        if(!codigo){
          throw new Error("Falta el campo código para buscar el libro")
        }
        const retorno = await this.services.patchNoaptearLibro(codigo)
        res.send(retorno) 
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })
      }
     
    }

    getDisponibles = async (req, res) => {
      try {
        const libros = await this.services.getDisponibles();
      res.send(libros);  
      } catch (error) {
        res.status(500).send("No se pudo obtener información de los libros")
      }  
    };

    getNoAptos = async (req, res) => {
      try {
        const libros = await this.services.getNoAptos();
        res.send(libros);
      } catch (error) {
        res.status(500).send("No se pudo obtener información de los libros")
      }
    };

    getAlquilados = async (req, res) => {
      try {
        const libros = await this.services.getAlquilados();
        res.send(libros);
      } catch (error) {
        res.status(500).send("No se pudo obtener información de los libros")
      }
    };

    // postLibro = async (req, res) => {
    //   try{
    //   const libro = req.body
      
    //   const retorno = await this.services.postLibro(libro)
    //   res.send(retorno)}
    //   catch(error){
    //     res.send("Falta alguno de los elementos")
    //   }
    // };

    // getVotosPorZona = async (req,res) => {
    //   try{
    //   const {distrito} = req.body
    //   const zona = await this.services.getVotosPorZona(distrito)
    //   res.send(zona)}
    //   catch(error){
    //     res.send("Eso nisiquiera tiene un distrito"+ error)
    //   }
    // }

    // getVotosPorcentaje = async (req,res) => {
    //   res.send(await this.services.getVotosPorcentaje())
    // }

    // getVotosTotales = async (req,res) => {
    //   const votos = await this.services.getVotosTotales()
    //   res.send(votos)
    // }
}
  
  export default LibrosController;