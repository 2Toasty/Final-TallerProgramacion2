import LibrosController from "../controllers/Libros.controller.js";
import express from 'express';

class Router {
    constructor() {
      this.router = express.Router();
      this.controller = new LibrosController();
    }
  
    start() {
      this.router.get("/libros", this.controller.getLibros);


      // this.router.get("/CAMBIARs/:id", this.controller.getCAMBIARsById);
      // this.router.post("/CAMBIARs", this.controller.postCAMBIAR);
      // this.router.get("/CAMBIARs/votosPorZona", this.controller.getVotosPorZona);
      // this.router.get("/CAMBIARs/votosTotales",this.controller.getVotosTotales);
      // this.router.get("/CAMBIARs/votosPorcentaje",this.controller.getVotosPorcentaje);

      return this.router;
    }
  }
  
  export default Router;