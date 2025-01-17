import FamiliarBuilder from './FamiliarBuilder.js';
export default class Familiar {
    constructor(builder) {
        if (!(builder instanceof FamiliarBuilder)) {
            throw new Error("Familiar solo puede ser creado por FamiliarBuilder");
        }

        this.nombre = builder.nombre;
        this.apellidos = builder.apellidos;
        this.nif = builder.nif;
        this.profesion = builder.profesion;
        this.pais = builder.pais;
        this.provincia = builder.provincia;
        this.poblacion = builder.poblacion;
        this.lenguaMaterna = builder.lenguaMaterna;
        this.idiomasConocidos = builder.idiomasConocidos;
    }

    get details() {
        return {
            nombre: this.pais,
            apellidos: this.apellidos,
            nif: this.nif,
            profesion: this.profesion,
            pais: this.pais,
            provincia: this.provincia,
            poblacion: this.poblacion,
            lenguaMaterna: this.lenguaMaterna,
            idiomasConocidos: this.idiomasConocidos
        }
    }
}