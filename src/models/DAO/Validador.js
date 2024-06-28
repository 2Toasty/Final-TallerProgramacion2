class Validador {
    constructor() {
        this.distritos = [
            "zona1",
            "zona2",
            "zona3",
            "zona4"
        ];
        this.candidatos = [
            "candidatoA",
            "candidatoB",
            "candidatoC",
            "enblanco"
        ];
    }

     distrito(d){
        return this.distritos.includes(d);
    }

     candidato(c){
        return this.candidatos.includes(c);
    }
    
    getDistritos(){
        return this.distritos
    }
}

export default Validador