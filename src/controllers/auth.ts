import { Request, Response } from "express";
const { registerNewUser, loginUser } = require("../services/auth");

const registerCthrl = async ({body}: Request, res:Response) => {
    try {
        const responseUser = await registerNewUser(body);
        res.send({ body });
    } catch (e) {
        res.status(500).send({ error: 'ERROR_REGISTER' });
    }
}

const loginCthrl = async (req: Request, res:Response) => {
    try {
        const { body } = req;
        res.send({ body });
    } catch (e) {
        res.status(500).send({ error: 'ERROR_REGISTER' });
    }
}

export {loginCthrl, registerCthrl};