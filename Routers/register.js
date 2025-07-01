import { Router } from "express";
import { check } from 'express-validator';
import { validarCampos } from "../Helpers/ValidationResult.js"
import { ValidateUserExists } from "../Helpers/Register.js";
import { registroCliente } from "../Controllers/Register.js";

const router = Router();

router.post("/registro", [
    check("Email").custom(ValidateUserExists),
    validarCampos
], registroCliente)


export default router