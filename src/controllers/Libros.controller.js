import LibrosServices from "../services/Libros.service.js";

class LibrosController {
    constructor() {
      this.services = new LibrosServices();
    }

    getLibros = async (req, res) => {
      const Libros = await this.services.getLibros();
      res.send(Libros);
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