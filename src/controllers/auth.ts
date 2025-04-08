import { Request, Response } from "express";
const { registerNewUser, loginUser } = require("../services/auth");

const registerCthrl = async ({body}: Request, res:Response) => {
    try {
        const responseUser = await registerNewUser(body);
        res.send({ responseUser });

    } catch (e) {
        res.status(500).send({ error: 'ERROR_REGISTER' });
    }
}

const loginCthrl = async ({body}: Request, res:Response) => {
    try {
        const {email, password} = body;
        const responseUser = await loginUser({email, password});
        res.send({ responseUser });

    } catch (e) {
        if(e === "PASSWORD_INCORRECT") return res.status(403).send({error: e});
        res.status(500).send({ error: 'ERROR_REGISTER' });
    }
}

export {loginCthrl, registerCthrl};