import LibrosModelMemory from "./LibrosMemory.model.js";
import LibrosModelFs from "./Libros.fs.js";

class ModelFactory{

    static get(type){
        switch (type) {
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return new LibrosModelMemory();
            case 'FS':
                console.log('Persistiendo en la memoria de Filesystem!')
                return new LibrosModelFs();
            default:
                console.log('Persistiendo en ... Default!')
                return new LibrosModelMemory();
                break;
        }
    }

}

export default ModelFactory