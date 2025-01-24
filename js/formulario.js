import Director from './Director.js';


// ============== Renderizar el formulario desde el JSON ==============


document.addEventListener('DOMContentLoaded', () => {

    const btnAniadir = document.querySelector('.miBtn');
    const nifCampoAlumno = document.getElementById('nif-alumno');
    const nifCampoFam1 = document.getElementById('nif-fam1');
    const nifCampoFam2 = document.getElementById('nif-fam2');
    const codPostCampo = document.getElementById('codigo-postal-alumno');
    const formulario = document.getElementById('formulario-alumno');


    let sonDosFamiliares = false;

    btnAniadir.addEventListener('click', mostrarFamiliar);
    nifCampoAlumno.addEventListener('blur', validarDniTiempoReal);
    nifCampoFam1.addEventListener('blur', validarDniTiempoReal);
    nifCampoFam2.addEventListener('blur', validarDniTiempoReal);
    codPostCampo.addEventListener('blur', validarCodigoPostalTiempoReal);
    formulario.addEventListener('submit', enviarFormulario)

    fetch('http://localhost/formularioComplejo/data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const jsonDatos = data;
            //Datos del Alumno
            cargarDesplegable('lengua-materna-alumno', jsonDatos.idiomas);
            cargarIdiomasConocidos(jsonDatos);

            //Familiar1
            cargarDesplegable('profesion-fam1', jsonDatos.profesiones);
            cargarLocalizaciones('pais-fam1', jsonDatos.paises);

            //Familiar2
            cargarDesplegable('profesion-fam2', jsonDatos.profesiones);
            cargarLocalizaciones('pais-fam2', jsonDatos.paises);

            //Direccion actual
            cargarLocalizaciones('pais-alumno', jsonDatos.paises);

            //Datos académicos
            cargarDesplegable('estudios-alcanzados', jsonDatos.nivelesDeEstudios);
            cargarDesplegable('idiomas-estudiados-alumno', jsonDatos.idiomas);
            cargarDesplegable('estudios-solicitados', jsonDatos.nivelesDeEstudios);

            //Información médica
            cargarAlergias(jsonDatos);

            //== Anidación de provincia y poblaciones
            filtrarProvincias(jsonDatos);
            filtrarPoblaciones(jsonDatos);
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });


    function cargarLocalizaciones(idDesplegable, datos) {
        //Seleccionamos el desplegable
        const desplegable = document.getElementById(idDesplegable);

        //Limpiar el contenido antes de cargar
        desplegable.innerHTML = '<option value="">Seleccione una opción</option>';

        for (let i of datos) {
            //Creamos un elemento option
            const optionElement = document.createElement('option');
            //Añadimos atributo value
            optionElement.value = i.value;
            //Añadimos un atributo personalizado para el id
            optionElement.setAttribute('data-id', i.id);
            //Añadimos contenido
            optionElement.textContent = i.label;
            //Insertamos en el elemento seleccionado el elemento creado
            desplegable.appendChild(optionElement);
        }
    }

    //Función que carga los desplegable sencillos
    function cargarDesplegable(idDesplegable, datos) {
        //Seleccionamos el desplegable
        const desplegable = document.getElementById(idDesplegable);

        for (let i of datos) {
            //Creamos un elemento option
            const optionElement = document.createElement('option');
            //Añadimos atributo value
            optionElement.value = i.value;
            //Añadimos contenido
            optionElement.textContent = i.label;
            //Insertamos en el elemento seleccionado el elemento creado
            desplegable.appendChild(optionElement);
        }
    }
    //Función que filtra las provincias en función al país
    function filtrarProvincias(jsonDatos) {

        document.getElementById('pais-alumno').addEventListener('change', cargarProvincia);
        document.getElementById('pais-fam1').addEventListener('change', cargarProvincia);
        document.getElementById('pais-fam2').addEventListener('change', cargarProvincia);

        function cargarProvincia(event) {
            // Captura el ID del país seleccionado

            //Options es una colección con todas las opciones del select. selctedIndex se refiere a la opción seleccionada. Dataset es un objeto que contiene todos los atributos personalizados data-* que tiene un elementoHTML
            const idPaisSeleccionado = parseInt(event.target.options[event.target.selectedIndex].dataset.id);


            //Filtrar las provincias correspondientes al id
            const provinciasSeleccionadas = jsonDatos.provincias.filter(provincia => provincia.id_pais == idPaisSeleccionado);


            //Determinar qué campo de provincia va a se actualizado
            let idDesplegableProvincias
            if (event.target.id === 'pais-alumno') {
                idDesplegableProvincias = 'provincia-alumno';
            } else if (event.target.id === 'pais-fam1') {
                idDesplegableProvincias = 'provincia-fam1';
            } else {
                idDesplegableProvincias = 'provincia-fam2';
            }
            cargarLocalizaciones(idDesplegableProvincias, provinciasSeleccionadas);
        }
    }
    //Función que filtra las poblaciones en función de la provincia
    function filtrarPoblaciones(jsonDatos) {

        document.getElementById('provincia-alumno').addEventListener('change', cargarPoblacion);
        document.getElementById('provincia-fam1').addEventListener('change', cargarPoblacion);
        document.getElementById('provincia-fam2').addEventListener('change', cargarPoblacion);

        function cargarPoblacion(event) {

            //Captura el ID de la provincia seleccionada

            //Options es una colección con todas las opciones del select.selectedIndex se refiere a la opcion seleccionada. Dataset es un objeto que contiene todos los atributos personalizados data-* que tiene un elementoHTML
            const idProvinciaSeleccionada = parseInt(event.target.options[event.target.selectedIndex].dataset.id);


            //Filtrar las poblaciones correspondientes al id
            const poblacionesSeleccionadas = jsonDatos.poblaciones.filter(poblacion => poblacion.id_provincia == idProvinciaSeleccionada);


            //Determinar qué campo de población va a ser actualizado
            let idDesplegablePoblaciones;
            if (event.target.id === 'provincia-alumno') {
                idDesplegablePoblaciones = 'poblacion-alumno';

            } else if (event.target.id === 'provincia-fam1') {
                idDesplegablePoblaciones = 'poblacion-fam1';

            } else {
                idDesplegablePoblaciones = 'poblacion-fam2';
            }
            cargarLocalizaciones(idDesplegablePoblaciones, poblacionesSeleccionadas);
        }

    }
    //Función que carga el checkbox de idiomas conocidos
    function cargarIdiomasConocidos(jsonDatos) {
        // Seleccionamos las columnas del documento
        const columna0 = document.querySelectorAll('.col-md-4')[0];
        const columna1 = document.querySelectorAll('.col-md-4')[1];
        const columna2 = document.querySelectorAll('.col-md-4')[2];

        // Seleccionamos los idiomas
        const idiomas = jsonDatos.idiomas;

        // Calculamos el tamaño de cada tercio
        const tercio = Math.trunc(idiomas.length / 3);
        const resto = idiomas.length % 3; // Resto de dividir en tres partes

        // Recorremos el primer tercio
        for (let i = 0; i < tercio; i++) {
            const idioma = idiomas[i];
            const idiomaHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="idiomas-conocidos-alumno"
                        value="${idioma.value}" id="${idioma.value}">
                    <label class="form-check-label" for="${idioma.value}">${idioma.label}</label>
                </div>
            `;
            columna0.innerHTML += idiomaHTML;
        }

        // Recorremos el segundo tercio
        for (let i = tercio; i < tercio * 2; i++) {
            const idioma = idiomas[i];
            const idiomaHTML =
                `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="idiomas-conocidos-alumno"
                        value="${idioma.value}" id="${idioma.value}">
                    <label class="form-check-label" for="${idioma.value}">${idioma.label}</label>
                </div>
            `;
            columna1.innerHTML += idiomaHTML;
        }

        // Recorremos el resto (última parte)
        for (let i = tercio * 2; i < idiomas.length; i++) {
            const idioma = idiomas[i];
            const idiomaHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="idiomas-conocidos-alumno"
                        value="${idioma.value}" id="${idioma.value}">
                    <label class="form-check-label" for="${idioma.value}">${idioma.label}</label>
                </div>
            `;
            columna2.innerHTML += idiomaHTML;
        }
    }
    //Función que carga los checkbox de alergias
    function cargarAlergias(jsonDatos) {
        // Seleccionamos el contenedor de alergias
        const containerAlergias = document.querySelector('#container-alergias');

        // Iteramos sobre las alergias en el JSON
        for (const alergia of jsonDatos.alergias) {
            const alergiaHTML = `
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" name="alergias-alumno" 
                    value="${alergia.value}" id="${alergia.value}">
                    <label class="form-check-label" for="${alergia.value}">${alergia.label}</label>
                </div>
            `;
            // Insertamos el HTML en el contenedor
            containerAlergias.innerHTML += alergiaHTML;
        }
    }

    //Función que muestra el formulario del segundo familiar
    function mostrarFamiliar() {

        //Selección del formulario del familiar
        const formFam2 = document.getElementById('fam2');

        //Selección de los campos obligatorios
        let campos = [
            document.querySelector('input[name="nombre-fam2"]'),
            document.querySelector('input[name="apellidos-fam2"]'),
            document.querySelector('input[name="nif-fam2"]'),
            document.querySelector('select[name="profesion-fam2"]'),
            document.querySelector('select[name="pais-fam2"]'),
            document.querySelector('select[name="provincia-fam2"]'),
            document.querySelector('select[name="poblacion-fam2"]')
        ];

        //Hacer obligatorios los campos
        for (let campo of campos) {
            campo.setAttribute('required', '');
        }

        //Mostrar el familiar
        formFam2.classList.remove('oculto');

        //Interruptor a verdadero
        sonDosFamiliares = true;
    }


    //============== Validación del DNI y Código Postal ==============

    function validarDNI(dni) {
        const regexDNI = /^[0-9]{8}[A-Z]$/;
        return regexDNI.test(dni);
    }

    // Validar Código Postal
    function validarCodigoPostal(cp) {
        const regexCP = /^[0-9]{5}$/;
        return regexCP.test(cp);
    }

    // Evento blur para validar el NIF al perder el foco
    function validarDniTiempoReal(event) {
        //Recuperar el campo modificado
        let campoError = document.getElementById("error-" + event.target.name);

        //La validación no se ejecutará si el campo está vacío
        if (event.target.value.length != 0 && !validarDNI(event.target.value.trim())) {

            if (!validarDNI(event.target.value.trim())) {
                campoError.textContent = "El campo NIF debe contener 8 dígitos y una letra mayúscula.";
            } else {
                campoError.textContent = "";
            }
        }
    }

    function validarCodigoPostalTiempoReal(event) {
        //Recuperar el campo modificado
        let campoError = document.getElementById("error-" + event.target.name);

        //La validación no se ejecutará si el cmapo está vacío
        if (event.target.value.length != 0 && !validarCodigoPostal(event.target.value.trim())) {
            if (!validarCodigoPostal(event.target.value.trim())) {
                campoError.textContent = "El campo Código postal debe contener 5 dígitos";
            } else {
                campoError.textContent = "";
            }
        }


    }


    function enviarFormulario(event) {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Seleccionar el contenedor de errores generales
        const errorGeneral = document.getElementById('error-general');

        // Inicializamos el estado de validación
        let esValido = true;
        let mensajeError = "";

        // Validar DNI del alumno
        if (!validarDNI(nifCampoAlumno.value.trim())) {
            esValido = false;
            mensajeError += "El DNI del alumno no es válido. ";
        }

        // Validar DNI del familiar 1
        if (!validarDNI(nifCampoFam1.value.trim())) {
            esValido = false;
            mensajeError += "El DNI del familiar 1 no es válido. ";
        }

        // Validar DNI del familiar 2 (opcional: solo si tiene contenido)
        if (nifCampoFam2.value.trim() && !validarDNI(nifCampoFam2.value.trim())) {
            esValido = false;
            mensajeError += "El DNI del familiar 2 no es válido. ";
        }

        // Validar código postal
        if (!validarCodigoPostal(codPostCampo.value.trim())) {
            esValido = false;
            mensajeError += "El código postal no es válido.";
        }

        // Mostrar mensaje de error si hay campos inválidos
        if (!esValido) {
            errorGeneral.textContent = mensajeError;
            return; // Salimos de la función si hay errores
        }

        // Si todo es válido, procesar el formulario
        errorGeneral.textContent = ""; // Limpiamos el mensaje de error

        const formData = new FormData(formulario);

        // Crear el objeto alumno usando la clase Director
        const miAlumno = Director.crearAlumno(formData, sonDosFamiliares);
        console.log(miAlumno.details);

        mostrarMensajeExito();
    }

    function mostrarMensajeExito() {
        // Crear la estructura de la ventana modal
        const modal = document.createElement('div');
        modal.id = 'miModal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-contenido">
                <span class="cerrar">&times;</span>
                <h2>Gracias</h2>
                <p>Gracias por enviar el formulario. Puedes ver el objeto en la consola.</p>
                <button id="cerrarModal" class="btn">Cerrar</button>
            </div>
        `;

        // Insertar la ventana modal en el body
        document.body.appendChild(modal);

        // Mostrar la ventana modal
        modal.style.display = 'block';

        // Funcionalidad para cerrar la ventana modal
        const cerrarBoton = document.getElementById('cerrarModal');
        const cerrarSpan = modal.querySelector('.cerrar');

        cerrarBoton.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.remove(); // Eliminar la ventana modal del DOM
        });

        cerrarSpan.addEventListener('click', () => {
            modal.style.display = 'none';
            modal.remove();
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
                modal.remove();
            }
        });
    }

});