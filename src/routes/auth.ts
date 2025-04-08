import { Request, Response, Router } from "express";


/**
 http//localhost:3002/auth/register [POST]
 */
const router = Router();
router.post("/register" );
router.post("/login" );

export { router };