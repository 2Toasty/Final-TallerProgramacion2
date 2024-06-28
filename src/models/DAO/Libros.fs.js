import fs from "fs";
// import Validador from "./Validador.js";

class LibrosModelFs {
  constructor() {
    this.libros = "Libros.json";

    // this.validador = new Validador();
  }

  getLibros = async () => {
    const data = await fs.promises.readFile(this.libros, "utf-8");
    return data;
  };




//   getLibroById = async (id) => {
//     const data = JSON.parse(await fs.promises.readFile(this.Libros, "utf-8"));
//     const CAMBIAR = await data.find((C) => C.id == id)
//     return `¡Hola ${CAMBIAR.nombre}! Tu nota es ${CAMBIAR.nota}` || "CAMBIAR no encontrado"
// }
  

  // postCAMBIAR = async (libro) => { 

  //   try{
  //       let m = "";
  //       const candidatoValido = this.validador.candidato(voto.candidato)
  //       const distritoValido = this.validador.distrito(voto.distrito)

  //       let data = await fs.promises.readFile(this.CAMBIARs, "utf-8");
  //       if(data === undefined || data === ""){
  //         data = []
  //       }else{data = JSON.parse(data)}
        
  //       if(candidatoValido && distritoValido){
  //         data.push(voto)
  //         m = "Voto cargado"
  //       } 
        
  //       if(!candidatoValido){
  //         m += "El candidato no es valido. ";
  //       }

  //       if(!distritoValido){
  //         m += "El distrito no es valido. "
  //       }
  //       const newData = JSON.stringify(data);
  //       await fs.promises.writeFile(this.CAMBIARs, newData);

            
  //     return m
  //   }catch(error){
  //     return "Formato invalido" + error
  //   }
  // };

  // getVotosPorZona = async (zona) => {
    
  //   if (this.validador.distrito(zona)) {
  //     const votosPorZona = await this.contadorVotos(zona);
  //     return { [zona]: votosPorZona };
  //   } else {
  //     return "Distrito inexistente";
  //   }
  // }

  // contadorVotos = async (zona) => {
  //   let data = JSON.parse(await fs.promises.readFile(this.CAMBIARs, "utf-8"));
  //   const votosFiltrados = zona ? data.filter(voto => voto.distrito === zona) : data;
  //   const votosContados = votosFiltrados.reduce((result, voto) => {
  //     result[voto.candidato] = (result[voto.candidato] || 0) + 1;
  //     return result;
  //   }, {
  //     candidatoA: 0,
  //     candidatoB: 0,
  //     candidatoC: 0,
  //     enblanco: 0
  //   });
  //   return votosContados;
  // }

  // getVotosTotales = async () => {
  //   try {
  //     const votosTotales = await this.contadorVotos();
  //     return { "Generales": votosTotales };
  //   } catch (error) {
  //     return "Un error en getVotos";
  //   }

  // }
  // getVotosPorcentaje = async () => {
  //   const votosContados = await this.contadorVotos();
  //   let totalVotos = 0;
  // for (const candidato in votosContados) {
  //   totalVotos += votosContados[candidato];
  // }

  //   let { candidatoA, candidatoB, candidatoC, enblanco } = votosContados;

  //   const maxVotes = Math.max(candidatoA, candidatoB, candidatoC);
  //   if (maxVotes === candidatoA) {
  //     candidatoA += enblanco;
  //   } else if (maxVotes === candidatoB) {
  //     candidatoB += enblanco;
  //   } else if (maxVotes === candidatoC) {
  //     candidatoC += enblanco;
  //   }
    
  //   return{
  //     candidatoA: candidatoA !== 0 ? ((candidatoA/totalVotos) *100).toFixed(2) : 0,
  //     candidatoB: candidatoB !== 0 ? ((candidatoB/totalVotos) *100).toFixed(2) : 0,
  //     candidatoC: candidatoC !== 0 ? ((candidatoC/totalVotos) *100).toFixed(2) : 0
  //   }
  // }


}
export default LibrosModelFs;
