import CAMBIARsModelMemory from "./CAMBIARsMemory.model.js";
import CAMBIARsModelFs from "./CAMBIARs.fs.js";

class ModelFactory{

    static get(type){
        switch (type) {
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return new CAMBIARsModelMemory();
            case 'FS':
                console.log('Persistiendo en la memoria de Filesystem!')
                return new CAMBIARsModelFs();
            default:
                console.log('Persistiendo en ... Default!')
                return new CAMBIARsModelMemory();
                break;
        }
    }

}

export default ModelFactory