import { Request, Response, Router } from "express";
const { registerCthrl, loginCthrl } = require("../controllers/auth");

/**
 http//localhost:3002/auth/register [POST]
 */
const router = Router();
router.post("/register", registerCthrl );
router.post("/login",loginCthrl );

export { router };