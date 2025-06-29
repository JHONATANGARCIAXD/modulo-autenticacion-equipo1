import { Router } from "express";
import registroCliente from "../controllers/registro.js"
const router= Router();
router.post("/registro",registroCliente)
export default router