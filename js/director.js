import DireccionBuilder from './DireccionBuilder.js';
import AlumnoBuilder from './AlumnoBuilder.js';
import FamiliarBuilder from './FamiliarBuilder.js';

export default class Director {
    static crearAlumno(formData, sonDosFamiliares) {
        let miDirector = new Director();
        //Creación de un builder y añadir propiedades simples
        let alumnoBuilder = new AlumnoBuilder();
        let alumno = alumnoBuilder
            .setNombre(formData.get("nombre-alumno"))
            .setApellidos(formData.get("apellidos-alumno"))
            .setNif(formData.get("nif-alumno"))
            .setLenguaMaterna(formData.get("lengua-materna-alumno"))
            .setColegioProcedencia(formData.get("colegio-alumno"))
            .setEstudiosAlcanzados(formData.get("estudios-alcanzados"))
            .setEstudiosSolicitados(formData.get("estudios-solicitados"))
            /* .setAlergias(formData.get("alergias")) */
            .setMedicacion(formData.get("medicacion"));


        //Añadir propiedades complejas
        //Añadir idiomas conocidos
        let idiomasConocidos = formData.getAll("idiomas-conocidos-alumno");
        for (let idioma of idiomasConocidos) {
            alumno.addIdiomaConocido(idioma);
        }

        //Añadir idiomas estudiados
        let idiomasEstudiados = formData.getAll("idiomas-estudiados-alumno");
        for (let idioma of idiomasEstudiados) {
            alumno.addIdiomaEstudiado(idioma);
        }
        
        //Añadir alergias
        let alergias = formData.getAll("alergias-alumno");
        for (let alergia of alergias) {
            alumno.addAlergia(alergia);
        }

        //Creación de una dirección
        let direccionAlumno = miDirector.#crearDireccion(formData);

        //Añadir la direccion
        alumno.setDireccion(direccionAlumno);



        //Lógica para crear familiares

        let familiar1 = miDirector.#crearFamiliar(formData, 1);
        alumno.addFamiliar(familiar1);

        if (sonDosFamiliares) {
            let familiar2 = miDirector.#crearFamiliar(formData, 2);

            alumno.addFamiliar(familiar2);
        }

        return alumno.build();


    }

    #crearFamiliar(formData, numero) {

        //Varible que contiene el nombre dinámico del campo en el formulario
        let famN = "fam" + numero.toString();

        //Crear un builder
        let familiarBuilder = new FamiliarBuilder();
        let familiar = familiarBuilder

            //Añadir propiedades simples
            .setNombre(formData.get("nombre-" + famN))
            .setApellidos(formData.get("apellidos-" + famN))
            .setNif(formData.get("nif-" + famN))
            .setProfesion(formData.get("profesion-" + famN))
            .setPais(formData.get("pais-" + famN))
            .setProvincia(formData.get("provincia-" + famN))
            .setPoblacion(formData.get("poblacion-" + famN))
            .setLenguaMaterna(formData.get("lengua-materna-" + famN));

        //Añadir idiomas a partir de un array de idiomas
        let idiomas = formData.getAll("idiomas-conocidos-" + famN);
        
        for (let idiomaConocido of idiomas) {
            familiar.addIdiomaConocido(idiomaConocido);
        }

        //Crear y devolver un familiar
        return familiar.build();
    }

    #crearDireccion(formData) {
        //Crear un builder
        let direccionBuilder = new DireccionBuilder();

        //Crear una dirección y asignar el builder
        let direccion = direccionBuilder

            //Añadir propiedades
            .setPais(formData.get("pais-alumno"))
            .setProvincia(formData.get("provincia-alumno"))
            .setPoblacion(formData.get("poblacion-alumno"))
            .setDireccion(formData.get("direccion-alumno"))
            .setCodigoPostal(formData.get("codigo-postal-alumno"));

        //Crear dirección y devolver
        return direccion.build();
    }

    
}