import Alumno from './Alumno.js';
export default class AlumnoBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.nombre = ""
        this.apellidos = ""
        this.nif = "";
        this.lenguaMaterna = "";
        this.idiomasConocidos = [];
        this.familiares = [];
        this.direccion = {};
        this.colegioProcedencia = "";
        this.estudiosAlcanzados = "";
        this.idiomasEstudiados = []
        this.estudiosSolicitados = "";
        this.alergias = "";
        this.medicacion = "";
    }

    setNombre(nombre){
        this.nombre = nombre;
        return this;
    }

    setApellidos(apellidos){
        this.apellidos = apellidos;
        return this;
    }

    setNif(nif){
        this.nif = nif;
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

    addFamiliar(familiar){
        this.familiares.push(familiar);
        return this;
    }

    setDireccion(direccion){
        this.direccion = direccion;
        return this;
    }

    setColegioProcedencia(colegioProcedencia){
        this.colegioProcedencia = colegioProcedencia;
        return this;
    }

    setEstudiosAlcanzados(estudiosAlcanzados){
        this.estudiosAlcanzados = estudiosAlcanzados;
        return this;
    }

    addIdiomaEstudiado(idiomaEstudiado){
        this.idiomasEstudiados.push(idiomaEstudiado);
        return this;
    }

    setEstudiosSolicitados(estudiosSolicitados){
        this.estudiosSolicitados = estudiosSolicitados;
        return this;
    }

    setAlergias(alergias){
        this.alergias = alergias;
        return this;
    }

    setMedicacion(medicacion){
        this.medicacion = medicacion;
        return this;
    }

    build(){
        const ALUMNO = new Alumno(this);
        this.reset();
        return ALUMNO;
    }
}