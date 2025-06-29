import fetch from "node-fetch";         
import registro from "../models/registro.js";
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.RECAPTCHA_SECRET;  

const registroCliente = async (req, res) => {
  const { Name, Email, password, ConfirmPassword, "g-recaptcha-response": token } = req.body;
   const EmailValidation = await registro.findOne({ correo: Email })
  
  console.log("Clave secreta:", SECRET_KEY);
  console.log("TOKEN:", token);



  if (!token) {
    return res.status(400).json({ message: "Por favor completa el reCAPTCHA." });
  }


  const resp = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`,
    { method: "POST" }
  );
const data = await resp.json();
console.log("Respuesta reCAPTCHA:", data);

if (!data.success) {
  return res.status(400).json({ message: `Verificación reCAPTCHA fallida. Código(s): ${data['error-codes']?.join(', ')}` });
}
   
    if (EmailValidation) {
        return res
            .status(400)
            .json({ message: "Este correo ya está registrado." });
    }
    else{
            const registro1 = registro({
                nombre: Name,
                correo: Email,
                contraseña: password,
                confirmcontraseña: ConfirmPassword
            })
            await registro1.save()
            
        }
        return res
        .status(201)
        .json({ message: "Usuario registrado correctamente." });
    

}
export default registroCliente