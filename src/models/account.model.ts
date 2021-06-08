import mongoose, { Model } from "mongoose";
import { AccountInterface } from "../interface/account.interface";

const accountSchema = new  mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    username:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    webPage:{
        type:String,
        required:true,
        trim:true,
    }
})

const Account:Model<AccountInterface> = mongoose.model('Account',accountSchema,'accounts')

export{Account}