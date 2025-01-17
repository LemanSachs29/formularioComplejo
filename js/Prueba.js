import Director from './Director.js';

let miForm = new FormData();
miForm.append("nombre-alumno", "Juan");
miForm.append("apellidos-alumno", "Blanco Moyano");
miForm.append("nif-alumno", "41750503Y");
miForm.append("lengua-materna-alumno", "español");
miForm.append("idiomas-conocidos-alumno", "español");
miForm.append("idiomas-conocidos-alumno", "catalán");
miForm.append("idiomas-conocidos-alumno", "inglés");
miForm.append("nombre-fam1", "Juan José");
miForm.append("apellidos-fam1", "Blanco Martínez");
miForm.append("nif-fam1", "28867397M");
miForm.append("profesion-fam1", "camarero");
miForm.append("pais-fam1","España");
miForm.append("poblacion-fam1","Sevilla");
miForm.append("provincia-fam1","Sevilla");
miForm.append("poblacion-fam1","El Rubio");
miForm.append("lengua-materna-fam1","español");
miForm.append("idiomas-conocidos-fam1", "español");
miForm.append("idiomas-conocidos-fam1", "catalán");
miForm.append("idiomas-conocidos-fam1", "inglés");
miForm.append("pais-alumno","España");
miForm.append("provincia-alumno","Sevilla");
miForm.append("poblacion-alumno","Sevilla");
miForm.append("direccion-alumno","C/ Vicente Aleixandre nº55");
miForm.append("codigo-postal-alumno","41013");
miForm.append("colegio-alumno","CEIP Carmen Borrego");
miForm.append("estudios-alcanzados","FPGS");
miForm.append("idiomas-estudiados-alumno", "español");
miForm.append("idiomas-estudiados-alumno", "catalán");
miForm.append("idiomas-estudiados-alumno", "inglés");
miForm.append("estudios-solicitados","Grado Universitario");
miForm.append("alergias","comunismo");
miForm.append("medicacion","ninguna");

let miAlumno = Director.crearAlumno(miForm, false);

console.log(miAlumno);