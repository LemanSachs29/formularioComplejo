import AlumnoBuilder from './AlumnoBuilder.js';

export default class Alumno {
    constructor(builder) {
        if (!(builder instanceof AlumnoBuilder)) {
            throw new Error("Alumno solo puede ser creada por AlumnoBuilder");
        }

        this.nombre = builder.nombre;
        this.apellidos = builder.apellidos;
        this.nif = builder.nif;
        this.lenguaMaterna = builder.lenguaMaterna;
        this.idiomasConocidos = builder.idiomasConocidos;
        this.familiares = builder.familiares;
        this.direccion = builder.direccion;
        this.colegioProcedencia = builder.colegioProcedencia;
        this.estudiosAlcanzados = builder.estudiosAlcanzados;
        this.idiomasEstudiados = builder.idiomasEstudiados;
        this.estudiosSolicitados = builder.estudiosSolicitados;
        this.alergias = builder.alergias;
        this.medicacion = builder.medicacion;
    }

    get details() {
        return {
            nombre : this.nombre,
            apellidos : this.apellidos,
            nif : this.nif,
            lenguaMaterna : this.lenguaMaterna,
            idiomasConocidos : this.idiomasConocidos,
            familiares : this.familiares,
            direccion : this.direccion,
            colegioProcedencia : this.colegioProcedencia,
            estudiosAlcanzados : this.estudiosAlcanzados,
            idiomasEstudiados : this.idiomasEstudiados,
            estudiosSolicitados : this.estudiosSolicitados,
            alergias : this.alergias,
            medicacion : this.medicacion
        }
    }
}
