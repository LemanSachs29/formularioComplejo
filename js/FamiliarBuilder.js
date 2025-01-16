import Familiar from './familiar.js';
export default class FamiliarBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.nombre = "";
        this.apellidos = "";
        this.nif = "";
        this.profesion = "";
        this.pais = "";
        this.provincia = "";
        this.poblacion = "";
        this.lenguaMaterna = "";
        this.idiomasConocidos = [];
    }

    setNombre(nombre) {
        this.nombre = nombre;
        return this;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
        return this;
    }

    setNif(nif) {
        this.nif = nif;
        return this;
    }

    setProfesion(profesion) {
        this.profesion = profesion;
        return this;
    }

    setPais(pais) {
        this.pais = pais;
        return this;
    }

    setProvincia(provincia) {
        this.provincia = provincia;
        return this;
    }

    setPoblacion(poblacion) {
        this.poblacion = poblacion;
        return this;
    }

    setLenguaMaterna(lenguaMaterna){
        this.lenguaMaterna = lenguaMaterna;
        return this;
    }

    addIdiomaConocido(idiomaConocido){
        this.idiomasConocidos.push(idiomaConocido);
        return this;
    }

    build() {
        const FAMILIAR = new Familiar(this);
        this.reset();
        return FAMILIAR;
    }
}