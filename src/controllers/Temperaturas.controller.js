import TemperaturasServices from "../services/Temperaturas.service.js";

class TemperaturasController {
    constructor() {
      this.services = new TemperaturasServices();
    }

    getTemperaturas = async (req, res) => {
      
      try {
        const temperaturas = await this.services.getTemperaturas();
        res.send(temperaturas);
      } catch (error) {
        res.status(500).send("No se pudo obtener información de los Temperaturas")
      }
    };

    postTemperatura = async (req,res) => {
      try {
        const {id,temperatura} = req.body
        if(!id || !temperatura){
          throw new Error("Falta el campo id o temperatura")
        }
        const retorno = await this.services.postTemperatura({id,temperatura})
        res.send(retorno)
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })
      }
      
    }

    getTemperaturasSonda = async (req,res) => {
      try {
        const {id} = req.body
        if(!id){
          throw new Error("Falta el campo id")
        }
        const retorno = await this.services.getTemperaturasSonda(id)
        res.send(retorno)
      } catch (error) {
        res.send({ statusCode: 400, message: error.message })
      }
    }

    getInfoEstadistica = async (req,res) => {
      try {
        const retorno = await this.services.getInfoEstadistica()
        res.send(retorno)
      } catch (error) {
        res.status(500).send("No se pudo obtener información de los Temperaturas")
      }     

    }
}
  
  export default TemperaturasController;