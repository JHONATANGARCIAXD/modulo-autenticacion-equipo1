# MÓDULO AUTENTICACIÓN EQUIPO UNO

## Objetivo
Diseñar e implementar un software web con módulos de registro, inicio de sesión y dashboard, que garantice validaciones seguras, almacenamiento confiable de datos, mensajes claros al usuario y una interfaz intuitiva. El sistema debe proteger el acceso mediante autenticación segura y ofrecer una experiencia fluida con redirecciones lógicas y panel personalizado tras el inicio de sesión.

---

## MÓDULO REGISTRO

### Objetivo
Diseñar e implementar un módulo de registro que permita a los usuarios crear una cuenta de manera segura, intuitiva y eficiente, garantizando la validación de datos, la protección de la información personal y la integración con los servicios del sistema para una correcta autenticación de usuarios.

### HISTORIAS DE USUARIO
1. Como nuevo usuario, quiero un formulario de registro claro y fácil de usar, para poder crear una cuenta rápidamente sin confusiones ni errores.
2. Como nuevo usuario, quiero registrarme con nombre completo, correo, contraseña, confirmar contraseña para crear una cuenta.
3. Como nuevo usuario quiero tener mensajes de error específicos por cada campo inválido. Formato de correo. Correo único, contraseña segura (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo), Confirmación de contraseña, Aceptación de términos y condiciones. Para no cometer errores a la hora de registrarme.
4. Como nuevo usuario, quiero que el registro incluya una validación con reCAPTCHA, para evitar que bots o sistemas automáticos creen cuentas falsas.
5. Como nuevo usuario, quiero que el registro esté conectado a una base de datos, para mantener mi información segura e iniciar sesión en cualquier momento. 
6. Como nuevo usuario quiero que me muestren un mensaje de éxito tras el registro para saber que este fue un éxito.
7. Como nuevo usuario quiero que una vez registrado me dirija al login para poder proceder con el inicio de sesión.
8. Como nuevo usuario, quiero que me muestre un mensaje si el usuario ya está registrado, para evitar correos duplicados.

---

## MODULO LOGIN

### Objetivo
Diseñar e implementar un módulo de inicio de sesión que permita a los usuarios previamente registrados acceder de forma segura, intuitiva y eficaz, garantizando la verificación de credenciales, la protección de la información personal y la correcta redirección al panel principal (dashboard).

### HISTORIAS DE USUARIO
1. Como usuario registrado, quiero un formulario de inicio de sesión claro y fácil de usar, para poder acceder a la cuenta sin problema.
2. Como usuario registrado quiero tener mensajes de error específicos por cada campo inválido: validar que el correo tenga el formato correcto, que la contraseña tenga un mínimo de caracteres y validar los campos requeridos.
3. Como usuario registrado, quiero que el formulario esté conectado a la base de datos del registro, para poder acceder con la información del registro. 
4. Como usuario registrado quiero validar la existencia de mi cuenta y que la contraseña ingresada coincida con la guardada en la base de datos para garantizar el acceso solo a usuarios registrados.
5. Como usuario registrado quiero que después de varios intentos fallidos el sistema me niegue el acceso durante un tiempo para proteger mi cuenta. 
6. Como usuario registrado quiero que después de iniciar sesión exitosamente me redireccione al dashboard.
7. Como usuario registrado quiero que una vez logueado me genere un token que será guardado en el localstorage para mantener la sesión abierta o habilitada.

---

## MÓDULO DE DASHBOARD

### Objetivo
Diseñar e implementar una página principal que permita a los usuarios visualizar y editar su información personal de forma intuitiva, organizada y eficaz, facilitando la interacción con el sistema y el acceso a sus funcionalidades principales.

### Historia de usuario
1. Como usuario autenticado, quiero un dashboard con un diseño claro, organizado y visualmente intuitivo, para poder acceder fácilmente a la información y navegar por las diferentes secciones del sistema sin confusión.
2. Como usuario autenticado, quiero que una vez logueado se me valide mi token de autenticación y se identifique mi rol, para asegurar que tengo una sesión válida y autorizada antes de acceder al contenido del dashboard.
3. Como usuario autenticado, quiero que me redireccione al login si no hay una sesión válida o expirada para evitar accesos no autorizados al sistema.
4. Como usuario autenticado, quiero que una vez logueado me muestre componentes específicos según mi rol para acceder solo a las funcionalidades que me correspondan.
5. Como usuario autenticado, quiero que una vez logueado se me muestre mi nombre de usuario para identificar si accedí a mi cuenta correctamente.
6. Como usuario autenticado, quiero tener un botón de cierre de sesión para poder cerrar la sesión de forma segura cuando lo desee. 
7. Como usuario autenticado, quiero que el sistema tenga un tiempo de respuesta adecuado para tener una experiencia fluida.

---

## Enlace Al Tablero De GitHub Proyects
https://github.com/users/JHONATANGARCIAXD/projects/6

## Evidencias Del Tablero De GitHub Projects 

### Módulo Registro

📌 **Tareas Pendientes**  

![image](https://github.com/user-attachments/assets/499137dd-390c-47bd-94a5-22dcd4606742)
La imagen muestra las tareas del módulo Registro en el estado “TO DO”.

📌 **Tareas Terminadas**  

![image](https://github.com/user-attachments/assets/803e4651-b655-4f84-8084-5319881451df)
La imagen muestra las tareas del módulo Registro en el estado “DONE”.

### LOGIN

📌 **Tareas Pendientes**

![image](https://github.com/user-attachments/assets/a3b172c2-4014-41cf-9d57-bf4820c2647b)
La imagen muestra las tareas del módulo Login en el estado “TO DO”.

📌 **Tareas Terminadas**  

![image](https://github.com/user-attachments/assets/8b78ad2d-f831-403b-8527-4b32f2f087a9)
La imagen muestra las tareas del módulo Login en el estado “DONE”.

### DASHBOARD

📌 **Tareas Pendientes**  

![image](https://github.com/user-attachments/assets/6ce56c68-e988-47d4-9320-e8b98ea09a94)
La imagen muestra las tareas del módulo Dashboard en el estado “TO DO”.

📌 **Tareas Terminadas**

![image](https://github.com/user-attachments/assets/fc0679a4-5daf-4489-94d7-139a38941fed)
La imagen muestra las tareas del módulo Dashboard en el estado “DONE”.

---

## METODOLOGÍA SCRUM

### Developer Team
- Jhonatan Steven García Gómez (Scrum Master, Developer Full Stack)  
- Oscar Alexander Gomez Bohorquez (Developer Full Stack)  
- Oscar Duban Avila Moreno (Developer Full Stack)  
- Keinner Manuel Muñoz Gomez (Developer Full Stack)

---

### Sprint 1

**Objetivo:**  
Desarrollar los módulos de registro, inicio de sesión y dashboard garantizando una interfaz intuitiva, validaciones seguras y control de acceso basado en roles de usuario.

**Fecha:** 23 - 28 de junio de 2025  
**Duración:** 1 semana  

**Descripción de las tareas:**

**Módulo Registro - Responsable: Keinner Muñoz**  
- Diseñar el formulario de registro (UI/UX).  
- Implementar campos: nombre completo, correo, contraseña, confirmar contraseña.  
- Implementar validaciones: Formato de correo, Correo único (consultar en la base de datos), Contraseña segura (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo), Confirmación de contraseña. Aceptación de términos y condiciones.  
- Mostrar mensajes de error específicos por cada campo inválido.  
- Implementar reCAPTCHA para evitar registros automáticos.

**Módulo Login - Responsable: Jhonatan Garcia**  
- Diseñar el formulario de login (UI/UX).  
- Implementar campo de correo con validación de formato.  
- Implementar campo de contraseña con validación de mínimo de caracteres.  
- Implementar validación de campos requeridos.  
- Conectar el formulario con la base de datos MongoDb.

**Módulo Dashboard - Responsables: Oscar Gomez - Duban Avila**  
- Crear layout general del dashboard (UI/UX).  
- Validar token de autenticación y rol del usuario al cargar el dashboard.  
- Mostrar información personalizada según el tipo de usuario (rol).  
- Implementar control de sesión (expirada, inválida).

---

### Revisión de Sprint 1

**Fecha de revisión:** 29 de junio de 2025  

**Tareas completadas:**

**Módulo Registro:**  
- Diseñar el formulario de registro (UI/UX).  
- Implementar campos: nombre completo, correo, contraseña, confirmar contraseña.  
- Implementar validaciones: Formato de correo, Correo único (consultar en la base de datos), Contraseña segura (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo), Confirmación de contraseña. Aceptación de términos y condiciones.  
- Mostrar mensajes de error específicos por cada campo inválido.  
- Implementar reCAPTCHA para evitar registros automáticos.

**Módulo Login:**  
- Diseñar el formulario de login (UI/UX).  
- Implementar campo de correo con validación de formato.  
- Implementar campo de contraseña con validación de mínimo de caracteres.  
- Implementar validación de campos requeridos.  
- Conectar formulario con la base de datos MongoDb

**Módulo Dashboard:**  
- Crear layout general del dashboard (UI/UX).  
- Validar token de autenticación y rol del usuario al cargar el dashboard.  
- Mostrar información personalizada según el tipo de usuario (rol).  
- Implementar control de sesión (expirada, inválida).

**Dificultades encontradas:**  
Fue complejo complementar e integrar el código entre las distintas partes del sistema (frontend, backend y validaciones), lo que generó retrasos al unir los formularios con la lógica del servidor.

**Resultado del Sprint:**  
Se cumplió el objetivo del Sprint 1, logrando implementar los módulos de registro, login y dashboard con sus funcionalidades básicas, validaciones y conexión a base de datos. A pesar de dificultades en la integración del código, el sistema quedó funcional y listo para continuar con mejoras en el siguiente sprint.

---

### Sprint 2

**Objetivo:**  
Fortalecer la seguridad, validación y experiencia de usuario en los módulos de registro, login y dashboard, asegurando respuestas claras, persistencia de datos y control de sesión eficaz.

**Fecha:** 30 de junio de 2025 - 6 de julio de 2025  
**Duración:** 1 semana  

**Descripción de las tareas:**

**Módulo Registro - Responsable: Keinner Muñoz**  
- Conectar a la base de datos MongoDB.  
- Mostrar mensaje de éxito tras el registro.  
- Redirigir al login después de un registro exitoso (opcionalmente con mensaje).  
- Validar manejo de errores de servidor (ej. usuario ya registrado).  
- Implementar verificación de correo (si aplica).

**Módulo Login - Responsable: Jhonatan Garcia**  
- Validar existencia del usuario y coincidencia de la contraseña.  
- Mostrar mensajes de error claros (correo o contraseña incorrectos, campos vacíos).  
- Implementar lógica de bloqueo después de varios intentos fallidos.  
- Redireccionar al dashboard al iniciar sesión exitosamente.  
- Implementar almacenamiento seguro de token de sesión en localStorage.

**Módulo Dashboard - Responsables: Oscar Gomez - Duban Avila**  
- Redireccionar al login si no hay sesión válida.  
- Cargar componentes o módulos específicos del dashboard según permisos.  
- Mostrar nombre del usuario o bienvenida (opcional).  
- Implementar botón de cierre de sesión y lógica asociada.  
- Asegurar tiempo de respuesta adecuado y experiencia fluida.

---

### Revisión de Sprint 2

**Fecha de revisión:** 7 de julio de 2025  

**Tareas completadas:**

**Módulo Registro:**  
- Conectar a la base de datos MongoDB.  
- Mostrar mensaje de éxito tras el registro.  
- Redirigir al login después de un registro exitoso (opcionalmente con mensaje).  
- Validar manejo de errores de servidor (ej. usuario ya registrado).  
- Implementar verificación de correo (si aplica).

**Módulo Login:**  
- Validar existencia del usuario y coincidencia de la contraseña.  
- Mostrar mensajes de error claros (correo o contraseña incorrectos, campos vacíos).  
- Implementar lógica de bloqueo después de varios intentos fallidos.  
- Redireccionar al dashboard al iniciar sesión exitosamente.  
- Implementar almacenamiento seguro de token de sesión en localStorage.

**Módulo Dashboard:**  
- Redireccionar al login si no hay sesión válida.  
- Cargar componentes o módulos específicos del dashboard según permisos.  
- Mostrar nombre del usuario o bienvenida (opcional).  
- Implementar botón de cierre de sesión y lógica asociada.  
- Asegurar tiempo de respuesta adecuado y experiencia fluida.

**Dificultades encontradas:**  
Hubo errores en el manejo del token de sesión, especialmente al validar accesos y sesiones expiradas.

**Resultado del Sprint:**  
El sistema quedó funcional con autenticación mediante token, pese a fallos iniciales en su implementación.
