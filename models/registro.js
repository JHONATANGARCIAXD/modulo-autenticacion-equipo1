import mongoose from "mongoose";
const registrochema =  new mongoose.Schema({
    nombre:{type:String,},
    correo:{type:String,},
    contraseña:{type:String,},
    confirmcontraseña:{type:String,},
})
export default mongoose.model("registro",registrochema)