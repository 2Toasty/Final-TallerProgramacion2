import TemperaturasController from "../controllers/Temperaturas.controller.js";
import express from 'express';

class Router {
    constructor() {
      this.router = express.Router();
      this.controller = new TemperaturasController();
    }
  
    start() {
      this.router.get("/temperaturas", this.controller.getTemperaturas);
      this.router.post("/temperaturas", this.controller.postTemperatura);
      this.router.get("/temperaturas/sondaId", this.controller.getTemperaturasSonda);
      this.router.get("/infoEstadistica", this.controller.getInfoEstadistica);


      return this.router;
    }
  }
  
  export default Router;