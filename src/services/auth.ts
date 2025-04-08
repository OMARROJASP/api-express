import { encrypt, verified } from "../../utils/bcrypt.handle";
import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import UserModel from "../models/user";
import { generateToken } from "../../utils/jwt.handle";

const registerNewUser = async ({email, password, name}: User)=>{
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return {error:"User already exists"};
    
    const passHash = await encrypt(password);

    const registerNewUser = await UserModel.create({email, password: passHash, name});
    
    return registerNewUser;

}

const loginUser = async ({email, password}:Auth) =>{
    const checkIs  = await UserModel.findOne({email});
    if(!checkIs) return {error:"NOT_FOUND_USER"};

    const passwordHash =  checkIs.password; // el Incritado que biene de la base de datos
    const isCorrect = await verified(password, passwordHash); // el que viene del body

    if(!isCorrect) return "PASSWORD_INCORRECT";

    const token = generateToken(checkIs.email); // el que viene de la base de datos

    const data = {
        token,
        user: checkIs
    }
    return data;
}

export { registerNewUser, loginUser };