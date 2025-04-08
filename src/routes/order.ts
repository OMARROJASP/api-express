import { Router } from "express";
import { getItem } from "../controllers/order";
import { checkJwt } from "../middleware/session";


/* Esta ruta solo esta disponible para los usuarios que tienen la sesion activa */
const router = Router();
router.get("/",checkJwt,getItem );

export { router };