import { SaveOptions, Document } from "mongoose";
import UserController from "../controller/UserController";
import IUser from "../interfaces/IUser";

class UserService {

    private static controller: UserController = new UserController()


    static getAllUsers() {
        // return users;
    }

    static async getSingleUser(email: string) {

        return await this.controller.readOne({ email })

    }
    // static checkIfEmailExist(email) {

    // }

    // req.body
    static async createUser(body: CreateNewUserRequest) {
        let oldUser = await this.getSingleUser(body.email)
        if (oldUser) throw new Error("user is exist")

            let nUser: IUser = {
            email: body.email,
            fullName: body.fName,
            permission: "user",
            password: String(Math.random() * 100 * 100),
        }
        let newUser = await this.controller.create(nUser)
        if (newUser.save) newUser.save()

        return newUser
    }
}

export default UserService