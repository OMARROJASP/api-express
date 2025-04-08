import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handler"
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: string | JwtPayload;
}


const getItem = async (req:RequestExt, res:Response) => {
    try{
       res.send({
        data: "Esto solo lo ve las personas con sesion / JWT",
        user: req.user,
       })
    }catch(e){
       handleHttp(res, 'ERROR_GET_BLOGS');
    }

}


export { getItem};