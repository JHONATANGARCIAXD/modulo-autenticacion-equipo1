document.getElementById("register").addEventListener("click", async (e) => {
    e.preventDefault();
    const Name = document.getElementById("nombre").value;
    const Email = document.getElementById("correo").value;
    const password = document.getElementById("Contraseña").value;
    const ConfirmPassword = document.getElementById("ConfirmarContraseña").value;
    const token = grecaptcha.getResponse();
    const tieneMayuscula = /[A-ZÑ]/.test(password);
    const tieneMinuscula = /[a-zñ]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneSimbolo = /[^A-Za-z0-9]/.test(password);

    if (!Email.includes("@") || !Email.includes(".")) {
        return Swal.fire({
            icon: "error",
            title: "Correo no valido",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    else if (password.length < 8) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir minimo 8 caracteres",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if (!tieneMayuscula) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir mayusculas",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if (!tieneSimbolo) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir caracteres especiales",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if (!tieneMinuscula) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir minusculas",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if (!tieneNumero) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir numeros",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
    else if (password !== ConfirmPassword) {
        return Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });

    }
    if (!token) {
        return Swal.fire({
            icon: "error",
            title: "Falta reCAPTCHA",
            text: "Por favor marca el reCAPTCHA antes de continuar"
        });
    }

    try {
        const response = await fetch("/api/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name,  // con mayúscula
                Email,      // ⛔ backend espera "Email"
                password: password,
                ConfirmPassword: ConfirmPassword,
                "g-recaptcha-response": token
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            // Manejo específico para errores de reCAPTCHA
            if (errorData.message.includes("reCAPTCHA")) {
                throw new Error("Verificación reCAPTCHA fallida. Por favor inténtalo de nuevo.");
            }
            throw new Error(errorData.message || "Error en el registro");
        }

        const result = await response.json();
        await Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
            text: result.message
        });

        window.location.href = '/login.html';

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error en el registro',
            text: error.message
        });
        // Opcional: resetear el reCAPTCHA
        grecaptcha.reset();
    }
});