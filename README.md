# Proyecto: Formulario Interactivo con Validaciones y Modal

## Descripción del Proyecto
Este proyecto es un formulario web interactivo creado para recopilar datos de alumnos y sus familiares, incluyendo información personal, direcciones y preferencias. Incorpora validaciones personalizadas para campos como el DNI y el código postal, así como una funcionalidad para mostrar los datos ingresados en una ventana modal al enviar el formulario.

El objetivo principal de este proyecto fue aprender y aplicar conceptos avanzados de JavaScript, manipulación del DOM y estructuras de datos como objetos y arrays. Además, incluye una estructura escalable y modular que facilita su mantenimiento y mejora.

---

## Cosas que He Aprendido
1. **Validación Personalizada de Formularios:**
   - Uso de expresiones regulares para validar campos como el DNI y el código postal.
   - Implementación de validaciones tanto en eventos `blur` como en el evento `submit`.

2. **Manipulación del DOM:**
   - Dinamismo al llenar desplegables y crear estructuras HTML de manera programática.
   - Selección de elementos del DOM mediante `querySelector` y `getElementById`.

3. **Ventanas Modales:**
   - Creación dinámica de una ventana modal para mostrar mensajes de éxito y los datos del formulario.
   - Uso de eventos para mostrar y ocultar el modal de manera interactiva.

4. **Patrones de diseño: Patron Builder**
   - Uso del *Patron Builder* para generar un objeto complejo y estandarizado.
   - Generación de un objeto `Alumno` basado en los datos ingresados en el formulario.
   - Iteración sobre propiedades y subpropiedades de objetos para mostrarlos de manera clara.

5. **Interacción con Formularios HTML:**
   - Captura de datos con `FormData`.
   - Validación de campos `required` y manejo de errores.

6. **Depuración y Buenas Prácticas:**
   - Uso del depurador del navegador para resolver problemas.
   - Creación de código modular, reutilizable y legible.

---

## Requisitos de Instalación
Para ejecutar este proyecto, necesitas un servidor local como **XAMPP** o cualquier otro que pueda servir archivos estáticos. Esto es necesario porque el formulario carga datos desde un archivo JSON.

### Pasos para Instalar:
1. **Descargar e Instalar XAMPP:**
   - Descarga XAMPP desde su [sitio oficial](https://www.apachefriends.org/).
   - Instálalo y verifica que el servidor Apache esté funcionando.

2. **Configurar el Proyecto:**
   - Coloca los archivos del proyecto en la carpeta `htdocs` de XAMPP (por ejemplo, `C:\xampp\htdocs\formulario-proyecto`).

3. **Verificar la Estructura del Proyecto:**
   - Asegúrate de que los archivos están organizados correctamente:
     ```
     formulario-proyecto/
     |-- index.html
     |-- js/
     |   |-- Alumno.js
	 |   |-- AlumnoBuilder.js
	 |   |-- Direccion.js
	 |   |-- DireccionBuilder.js
	 |   |-- Director.js
	 |   |-- Familiar.js
	 |   |-- FamiliarBuilder.js
	 |   |-- formulario.js
	 |   |-- Prueba.js
     |-- css/
     |   |-- styles.css
     |-- data/
     |   |-- datos.json
	 |   |-- nombres-formulario.txt
     ```

4. **Iniciar el Servidor:**
   - Abre el panel de control de XAMPP y activa el servidor Apache.

---

## Uso del Proyecto
1. **Abrir el Formulario:**
   - Accede al formulario desde tu navegador en la URL:
     ```
     http://localhost/formulario-proyecto/index.html
     ```

2. **Interacción con el Formulario:**
   - Completa los campos del formulario.
   - Asegúrate de que los datos sean válidos (por ejemplo, el DNI debe seguir el formato correcto).
   - Haz clic en "Enviar".

3. **Visualizar la Modal:**
   - Aparecerá una ventana modal con un mensaje de éxito y los datos del formulario se mostrarán en la consola del navegador.

---

## Observaciones
- Si tienes problemas al cargar el archivo JSON, asegúrate de que el servidor Apache esté activo.
- Este proyecto es una base escalable. Puedes extenderlo para agregar nuevas funcionalidades como:
  - Enviar los datos a un servidor backend.
  - Validar más campos según las necesidades.
  - Mejorar el diseño de la interfaz con frameworks como Bootstrap.

