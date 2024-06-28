// import Validador from "./Validador.js";

class LibrosModelMemory {
    constructor() {
        this.libros = [
            {
              
            },
          ];

          // this.validador = new Validador();
   
    }



    getLibros = async () => {
      return this.libros;
    };




  //   //agregar voto
  //   postCAMBIAR = async (voto) =>{
  //     try{
  //     const mensaje = () => {
  //       let m = "";
  //       const candidatoValido = this.validador.candidato(voto.candidato)
  //       const distritoValido = this.validador.distrito(voto.distrito)

  //       if(candidatoValido && distritoValido){
  //         this.votos.push(voto)
  //         m = "Voto cargado"
  //       } 
        
  //       if(!candidatoValido){
  //         m += "El candidato no es valido. ";
  //       }

  //       if(!distritoValido){
  //         m += "El distrito no es valido. "
  //       }
  //       return m
  //     }
  //     return mensaje()
  //   }catch(error){
  //     return "Formato invalido"
  //   }
      
  // }

  // getVotosPorZona = async (zona) => {
    
  //   if (this.validador.distrito(zona)) {
  //     const votosPorZona = await this.contadorVotos(zona);
  //     return { [zona]: votosPorZona };
  //   } else {
  //     return "Distrito inexistente";
  //   }
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

  // contadorVotos = async (zona) => {
  //   const votosFiltrados = zona ? this.votos.filter(voto => voto.distrito === zona) : this.votos;
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


  }
  
  export default LibrosModelMemory;