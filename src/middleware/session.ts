import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {   
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop(); // Bearer token

        // 🔧 IMPORTANTE: Esperamos la promesa con await
        const isUser = await verifyToken(`${jwt}`);

        if (!isUser) {
            res.status(401).send("NO_TIENES_SESION_VALIDA");
        } else {
            console.log("SESION_VALIDA");
            console.log({ jwtByUser });
            next();
        }
    } catch (error) {    
        res.status(400).send("SESION_NO_VALIDA");
    }
}

export { checkJwt }
