import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";

const UserSchema = new Schema<User>(
    
       {
        name:{
            requqired:true,
            type:String,    
        },
        password:{
            required:true,      
        },
        email:{
            required:true,      
            type:String,
            unique:true,
        },
        description:{
            type:String,
            default:"Soy la description",
        }
       },
       {
        versionKey: false,
        timestamps: true,
       }

);

const UserModel = model('users', UserSchema);
export default UserModel;