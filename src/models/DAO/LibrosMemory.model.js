class LibrosModelMemory {
    constructor() {
        this.libros = [
          { codigo: 1, titulo: "Don Quijote", autor: "Miguel de Cervantes", estado: "disponible" },
          { codigo: 2, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", estado: "alquilado" },
          { codigo: 3, titulo: "Moby Dick", autor: "Herman Melville", estado: "no-apto" },
          { codigo: 4, titulo: "La Odisea", autor: "Homero", estado: "disponible" }
          ];
    }

    getLibros = async () => {
      const libro_estado = this.libros.map(libro => ({
        titulo: libro.titulo,
        estado: libro.estado
      }))
      return libro_estado;
    };

    darCodigo = () => {
      const codigosExistentes = this.libros.map(libro => libro.codigo);
      let codigo = 1;
      while (codigosExistentes.includes(codigo)) {
          codigo++;
      }
      return codigo;
  };

    postLibro = async (libro) => {
      const nuevoLibro = libro
      nuevoLibro.codigo = this.darCodigo();
      nuevoLibro.estado = "disponible"
      this.libros.push(nuevoLibro)
      return nuevoLibro
    }

    deleteLibro = async (codigo) => {
      const index = this.libros.findIndex((l) => l.codigo === codigo)
      if (index === -1) throw new Error("El codigo no existe")
      const retorno = this.libros.splice(index, 1)
    return retorno
    }

    patchAlquilarLibro = async (codigo) => {
      const index = this.libros.findIndex((l) => l.codigo === codigo);
      if (index === -1) throw new Error("El código no existe");
   
      const libro = this.libros[index];
      let sorteo;
    
      if (libro.estado !== "no-apto" && libro.estado !== "alquilado") {

        const response = await fetch('https://libros.deno.dev/premios');
        sorteo = await response.json();
          if (sorteo.premio === true) {
            this.deleteLibro(codigo); 
          return {
              sorteo,
              libro: {titulo: libro.titulo,autor: libro.autor}
            };
          }

          libro.estado = "alquilado";
          this.libros.splice(index, 1, libro);
      } else {
          return "El libro ya se encuentra alquilado o no está apto";
        }
  
      return {sorteo,libro};
    }
  
    patchDevolverLibro = async (codigo) => {
      const index = this.libros.findIndex((l) => l.codigo === codigo)
      if (index === -1) throw new Error("El codigo no existe")
      const libro = this.libros[index]
      if (libro.estado === "alquilado"){
      libro.estado = "disponible"
      this.libros.splice(index,1,libro)
    } else {
        return "El libro nunca fue alquilado"
      }
      
      return libro
    }
  
    patchNoaptearLibro = async (codigo) => {
      const index = this.libros.findIndex((l) => l.codigo === codigo)
      if (index === -1) throw new Error("El codigo no existe")
      const libro = this.libros[index]
      if (libro.estado === "alquilado" || libro.estado === "disponible"){
      libro.estado = "no-apto"
      this.libros.splice(index,1,libro)
    } else {
        return "El libro ya se encontraba en estado no apto"
      }
      
      return libro
    }

    getDisponibles = async () => {
      return this.libros.filter((l) => l.estado === "disponible")
    }

    getNoAptos = async () => {
      return this.libros.filter((l) => l.estado === "no-apto")
    }

    getAlquilados = async () => {
      return this.libros.filter((l) => l.estado === "alquilado")
    }

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