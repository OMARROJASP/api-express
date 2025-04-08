import { User } from "../interface/user.interface";
import UserModel from "../models/user";

const registerNewUser = async ({email, password, name}: User)=>{
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return {error:"User already exists"};

    const registerNewUser = await UserModel.create({email, password, name});
    
    return registerNewUser;

}

const loginUser = async () =>{}

export { registerNewUser, loginUser };