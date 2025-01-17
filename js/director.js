import DireccionBuilder from '.DireccionBuilder.js';
import AlumnoBuilder from './AlumnoBuilder.js';
import FamiliarBuilder from './FamiliarBuilder.js';

export default class Director {
    static crearAlumno(formData, sonDosFamiliares) {

        //Creación de un alumno y añadir propiedades simples
        let alumnoBuilder = new AlumnoBuilder();
        let alumno = alumnoBuilder
            .setNombre(formData.get("nombre-alumno"))
            .setApellidos(formData.get("apellidos-alumno"))
            .setNif(formData("nif-alumno"))
            .setLenguaMaterna(formData.get("lengua-materna-alumno"))
            .setCoelgioProcedencia(formData.get("colegio"))
            .setEstudiosAlcanzados(formData.get("estudios-alcanzados"))
            .setEstudiosSolicitados(formData.get(estudios - solicitados))
            .setAlergias(formData.get("alergias"))
            .setMedicacion(formData.get("medicacion"));


        //Añadir propiedades complejas
        //Añadir idiomas conocidos
        let idiomasConocidos = formData.getAll("idiomas-conocidos-alumno");
        for (idioma of idiomasConocidos) {
            alumno.addIdiomaConocido(idioma);
        } ===

        //Añadir idiomas estudiados
        let idiomasEstudiados = formData.getAll("idiomas-estudiados-alumno");
        for (idioma of idiomasEstudiados) {
            alumno.addIdiomaConocido(idioma);
        }

        //Creación de una dirección
        let direccionAlumno = crearDireccion(formData);

        //Añadir la direccion
        alumno.setDireccion(direccionAlumno);

                

        //Lógica para crear familiares
        let familiar1 = crearFamiliar(formData, 1);

    }

    #crearDireccion(formData) {
        //Lógica para crear una dirección
        let direccionbuilder = new DireccionBuilder();
        let direccionAlumno = direccionbuilder
            .setPais(formaData.get("pais-alumno"))
            .setProvincia(formData.get("provincia-alumno"))
            .setPoblacion(formData.get("poblacion-alumno"))
            .setDireccion(formData.get("direccion-alumno"))
            .setCodigopostal(formData.get("codigo-postal-alumno"))
            .build();
        return direccionAlumno;
    }

    #crearFamiliar(formData, numero) {

        let famN = "fam" + numero.toString();
        //Añadir propiedades simples
        let familiarBuilder = new FamiliarBuilder();
        let familiar = familiarBuilder
            .setNombre(formData.get("nombre-" + famN))
            .setApellidos(formData.get("apellidos-" + famN))
            .setNif(formData.get("nif-fam2"))
            .setProfesion(formData.get("profesion-" + famN))
            .setPais(formData.get("pais-" + famN))
            .setProvincia(formData.get("provincia-" + famN))
            .setPoblacion(formData.get("poblacion-" + famN))
            .setLenguaMaterna(formData.get("lengua-materna-" + famN));

        let idiomas = formData.getAll("idiomas-conocidos-" + famN);
        for (idiomaConocido of idiomas) {
            familiar1.addIdiomaConocido(idiomaConocido);
        }

        return familiar.build();
    }

    #crearDireccion(formData) {
        let direccionBuilder = new DireccionBuilder();
        let direccion = direccionBuilder
            .setPais(formData.get("pais-alumno"))
            .setProvincia(formData.get("provincia-alumno"))
            .setPoblacion(formData.get("poblacion-alumno"))
            .setDireccion(formData.get("direccion-alumno"))
            .setCodigoPostal(formData.get("codigo-postal-alumno"))
            .build;

        return direccion;
    }

}