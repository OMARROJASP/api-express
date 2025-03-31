import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handler"
import { insertCar, getCars } from "../services/item";

const getItem = (req:Request, res:Response) => {
    try{
        
    }catch(e){
       handleHttp(res, 'ERROR_GET_ITEM');
    }

}

const getItems = async (req:Request, res:Response) => {
    try{
      const responseItems = await getCars();
       }catch(e){
       handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const updateItem = (req:Request, res:Response) => {
    try{

    }catch(e){
       handleHttp(res, 'ERROR_UPDATE_ITEMS');
    }
}

const postItem = async({body}:Request, res:Response) => {
    try{
        const reponseItem = await insertCar(body);
         //res.send(reponseItem);
        res.json({ message: "Datos recibidos", data: reponseItem });
    }catch(e){
       handleHttp(res, 'ERROR_POST_ITEMS',e);
    }
}

const deleteItem = (req:Request, res:Response) => {
    try{

    }catch(e){
       handleHttp(res, 'ERROR_DELETE_ITEMS');
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem};