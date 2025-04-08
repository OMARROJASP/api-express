import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handler"
import { insertCar, getCars, getCar, updateCar,deleteCar  } from "../services/item";

const getItem = async (req:Request, res:Response) => {
    try{
        const { id } = req.params;
        const responseItems = await getCar(id);
        res.send({responseItems});  
       
    }catch(e){
       handleHttp(res, 'ERROR_GET_ITEM');
    }

}

const getItems = async (req:Request, res:Response) => {
    try{
      const responseItems = await getCars();
      res.send({responseItems});
       }catch(e){
       handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const updateItem = async (req:Request, res:Response) => {
    try{
        const { id } = req.params;
        const { body } = req;
        const responseItem = await updateCar(id, body);
        console.log(responseItem);
        res.send({responseItem});
        //res.json({ message: "Datos recibidos", data: responseItem });
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

const deleteItem = async(req:Request, res:Response) => {
    try{
        const { id } = req.params;
        const responseItem = await deleteCar(id);           
        res.send({responseItem});
    }catch(e){
       handleHttp(res, 'ERROR_DELETE_ITEMS');
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem};