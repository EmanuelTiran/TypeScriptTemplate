import { FilterQuery, UpdateQuery } from 'mongoose'
import users from '../data'
import IUser from '../interfaces/IUser'
import UserModel from '../models/UserModel'
import IController from '../interfaces/IController'

class UserController implements IController<IUser> {
    async create(data: IUser): Promise<IUser> {
        let user = await UserModel.create(data)
        return user
    }
    read(filter: FilterQuery<IUser>): IUser[] {
        
        throw new Error('Method not implemented.')
    }
    async readOne(filter: FilterQuery<IUser>): Promise<IUser | null> {
        return await UserModel.findOne(filter)
    }
    update(filter: FilterQuery<IUser>, newData: UpdateQuery<IUser>): IUser {
        throw new Error('Method not implemented.')
    }
    del(filter: FilterQuery<IUser>): boolean {
        throw new Error('Method not implemented.')
    }
    
    
     

}

export default UserController