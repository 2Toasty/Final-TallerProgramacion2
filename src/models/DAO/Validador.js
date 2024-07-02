class Validador {
    constructor() {
        this.sondas = [
            1,
            2,
            3,
            4,
            5
        ];
        this.temperaturas = [{
            tempMin : -20,
            tempMax : 100}
        ];
    }

     validarSonda(s){
        return this.sondas.includes(s);
    }

     validarTemperatura(t){
        return ( t >= this.temperaturas[0].tempMin ) && ( t <= this.temperaturas[0].tempMax );
    }
    
}

export default Validador