import { Document } from "mongoose";

interface UserInterface extends Document{
    username:string,
    password:string,
    salt:string
}

export {UserInterface}