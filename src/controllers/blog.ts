import { Request, Response } from "express"
import { handleHttp } from "../../utils/error.handler"

const getBlog = (req:Request, res:Response) => {
    try{
        
    }catch(e){
       handleHttp(res, 'ERROR_GET_BLOG');
    }

}

const getBlogs = (req:Request, res:Response) => {
    try{
        res.send(req.body)
    }catch(e){
       handleHttp(res, 'ERROR_GET_BLOGS');
    }
}

const updateBlog = (req:Request, res:Response) => {
    try{

    }catch(e){
       handleHttp(res, 'ERROR_UPDATE_BLOGS');
    }
}

const postBlog = ({body}:Request, res:Response) => {
    try{
        // res.send(body);
        res.json({ message: "Datos recibidos", data: body });
    }catch(e){
       handleHttp(res, 'ERROR_POST_BLOGS');
    }
}

const deleteBlog = (req:Request, res:Response) => {
    try{

    }catch(e){
       handleHttp(res, 'ERROR_DELETE_BLOGS');
    }
}

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog};