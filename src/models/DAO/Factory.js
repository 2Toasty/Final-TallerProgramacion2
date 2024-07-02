import TemperaturasModelMemory from "./TemperaturasMemory.model.js";
import TemperaturasModelFs from "./Temperaturas.fs.js";

class ModelFactory{

    static get(type){
        switch (type) {
            case 'MEM':
                console.log('Persistiendo en la memoria del servidor!')
                return new TemperaturasModelMemory();
            case 'FS':
                console.log('Persistiendo en la memoria de Filesystem!')
                return new TemperaturasModelFs();
            default:
                console.log('Persistiendo en ... Default!')
                return new TemperaturasModelMemory();
                break;
        }
    }

}

export default ModelFactory