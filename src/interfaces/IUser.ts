import { ObjectId } from "mongodb"
import Permission from "../unions/T_Permission"
import { Document } from "mongoose"
import PartialDoc from "../unions/T_PartialDoc"


export default interface IUser extends Partial<Pick<Document,PartialDoc>> {
    // _id? : ObjectId | string
    email : string
    fullName : string
    password? : string
    permission : Permission
    // myOrder : ObjectId[]
}

