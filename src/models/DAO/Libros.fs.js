import fs from "fs";

class LibrosModelFs {
  constructor() {
    this.libros = "Libros.json";
  }

    traerLibrosJson = async () => {
      let data = await fs.promises.readFile(this.libros, "utf-8")
      if(data === undefined || data === ""){
        data = []
      }else{data = JSON.parse(data)}
      return data;
    }

    actualizarLibrosJson = async (data) => {
      const newData = JSON.stringify(data)
      await fs.promises.writeFile(this.libros,newData)
    }

    getLibros = async () => {
      const data = await this.traerLibrosJson();
      const libro_estado = data.map(libro => ({
        titulo: libro.titulo,
        estado: libro.estado
      }))
      return libro_estado;
    };

    darCodigo = async () => {
      const data = await this.traerLibrosJson();
      const codigosExistentes = data.map(libro => libro.codigo);
      let codigo = 1;
      while (codigosExistentes.includes(codigo)) {
          codigo++;
      }
      return codigo;
  };

    postLibro = async (libro) => {
      const data = await this.traerLibrosJson();
      const nuevoLibro = libro
      nuevoLibro.codigo = await this.darCodigo();
      nuevoLibro.estado = "disponible"
      data.push(nuevoLibro)
      await this.actualizarLibrosJson(data)
      return nuevoLibro
    }

    deleteLibro = async (codigo) => {
      const data = this.traerLibrosJson();
      const index = data.findIndex((l) => l.codigo === codigo)
      if (index === -1) throw new Error("El codigo no existe")
      const retorno = data.splice(index, 1)
      await this.actualizarLibrosJson(data)
    return retorno
    }

    patchAlquilarLibro = async (codigo) => {
      const data = await this.traerLibrosJson();
      const index = data.findIndex((l) => l.codigo === codigo);
      if (index === -1) throw new Error("El código no existe");
   
      const libro = data[index];
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
          data.splice(index, 1, libro);
          await this.actualizarLibrosJson(data)
      } else {
          return "El libro ya se encuentra alquilado o no está apto";
        }
  
      return {sorteo,libro};
    }
  
    patchDevolverLibro = async (codigo) => {
      const data = await this.traerLibrosJson();

      const index = data.findIndex((l) => l.codigo === codigo)
      if (index === -1) throw new Error("El codigo no existe")
      const libro = data[index]
      if (libro.estado === "alquilado"){
      libro.estado = "disponible"
      data.splice(index,1,libro)
      await this.actualizarLibrosJson(data);

    } else {
        return "El libro nunca fue alquilado"
      }
      
      return libro
    }
  
    patchNoaptearLibro = async (codigo) => {
      const data = await this.traerLibrosJson();

      const index = data.findIndex((l) => l.codigo === codigo)
      if (index === -1) throw new Error("El codigo no existe")
      const libro = data[index]
      if (libro.estado === "alquilado" || libro.estado === "disponible"){
      libro.estado = "no-apto"
      data.splice(index,1,libro)
      this.actualizarLibrosJson(data)
    } else {
        return "El libro ya se encontraba en estado no apto"
      }
      
      return libro
    }

    getDisponibles = async () => {
      const data = await this.traerLibrosJson();

      return data.filter((l) => l.estado === "disponible")
    }

    getNoAptos = async () => {
      const data = await this.traerLibrosJson();

      return data.filter((l) => l.estado === "no-apto")
    }

    getAlquilados = async () => {
      const data = await this.traerLibrosJson();

      return data.filter((l) => l.estado === "alquilado")
    }


}
export default LibrosModelFs;
