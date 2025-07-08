let valido = false

document.getElementById("register").addEventListener("click", async (e) => {
    e.preventDefault();
    const Name = document.getElementById("nombre").value;
    const Email = document.getElementById("correo").value;
    const Password = document.getElementById("Contraseña").value;
    const ConfirmPassword = document.getElementById("ConfirmarContraseña").value;
    const Token = grecaptcha.getResponse();
    const TerminosAceptados = document.getElementById("terminosCondiciones").checked;

    validations(Name, Email, Password, ConfirmPassword, Token, TerminosAceptados)
    if (valido) {
        register(Name, Email, Password, Token)
    }
});

const register = async (Name, Email, Password, Token) => {
    try {
        const response = await fetch("http://localhost:3001/api/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name,
                Email,
                Password,
                "g-recaptcha-response": Token
            })
        });

        const data = await response.json();

        if (!response.ok) {
            if (data.errors) {
                return Swal.fire({
                    title: "Error de validación",
                    html: data.errors[0].msg,
                    icon: "error"
                });
            }

            if (data.message?.includes("reCAPTCHA")) {
                throw new Error("Verificación reCAPTCHA fallida. Por favor inténtalo de nuevo.");
            }

            throw new Error(data.message || "Error en el registro");
        }

        Swal.fire({
            icon: 'success',
            title: data.message,
            showConfirmButton: false
        });

        setTimeout(() => {
            window.location.href = '/login.html';
        }, 1000)


    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error en el registro',
            text: error.message
        });
        grecaptcha.reset();
    }
}


const validations = (Name, Email, Password, ConfirmPassword, Token, TerminosAceptados) => {
    const tieneMayuscula = /[A-ZÑ]/.test(Password);
    const tieneMinuscula = /[a-zñ]/.test(Password);
    const tieneNumero = /[0-9]/.test(Password);
    const tieneSimbolo = /[^A-Za-z0-9]/.test(Password);
    const validarCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);
    // Validaciones de entrada
    if (Name === "") {
        return Swal.fire({
            icon: "error",
            title: "CAMPO VACIO",
            text: "COMPLETA EL CAMPO NOMBRE"
        });
    }

    else if (Email === "") {
        return Swal.fire({
            icon: "error",
            title: "CAMPO VACIO",
            text: "COMPLETA EL CAMPO EMAIL"
        });
    }
    else if (!validarCorreo) {
        return Swal.fire({
            icon: "error",
            title: "Error",
            text: "FORMATO DE CORREO INVALIDO"

        });
    }

    else if (Password.length < 8) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir minimo 8 caracteres",

        });
    }

    else if (!tieneMayuscula) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir mayusculas",

        });
    }

    else if (!tieneSimbolo) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir caracteres especiales",

        });
    }

    else if (!tieneMinuscula) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir minusculas",

        });
    }

    else if (!tieneNumero) {
        return Swal.fire({
            icon: "error",
            title: "La contraseña debe incluir numeros",

        });
    }

    else if (Password !== ConfirmPassword) {
        return Swal.fire({
            icon: "error",
            title: "Las contraseñas no coinciden",

        });
    }

    else if (!Token) {
        return Swal.fire({
            icon: "error",
            title: "Falta reCAPTCHA",
            text: "Por favor marca el reCAPTCHA antes de continuar"
        });
    }

    else if (!TerminosAceptados) {
        return Swal.fire({
            icon: "error",
            title: "Debes aceptar los términos y condiciones",
            text: "Marca la casilla para continuar con el registro"
        });
    }
    else {
        valido = true
    }

}