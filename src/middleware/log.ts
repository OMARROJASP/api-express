import { NextFunction, Request, Response } from "express";

const logMiddleware = (req:Request, res:Response, next:NextFunction) => {
    console.log("Hola esto es un middleware");
    next();
};

export default logMiddleware;   