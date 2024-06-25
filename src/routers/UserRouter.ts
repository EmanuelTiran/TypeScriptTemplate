import {Request, Response, Router} from 'express'
import UserService from '../services/UserService'
import { Mapper } from '../helpers/Mapper'
import CreateNewUserRequest from '../dto/user/CreateNewUserRequest'


const router = Router()

// CRUD : all users, signle user, create user, update user
router.get('/',async (req : Request, res: Response)=>{
    try{ 
        res.send(UserService.getAllUsers())
        // res.send(new UserService().getAllUsers())
    }
    catch(err){
        res.status(400).send(err)
    }
})

router.post('/',async (req : Request, res: Response)=>{
    try{
        console.log(req.body)
        // let newBody =  Mapper<CreateNewUserRequest>(new CreateNewUserRequest(),req.body)
        let newBody = new CreateNewUserRequest(req.body.fullName, req.body.age, req.body.phone, req.body.email, req.body.isRemeber)
        console.log({newBody})
        const user = await UserService.createUser(newBody)
        console.log(user)
        res.send(user)
    }
    catch(err){
        console.log({err})
        res.status(400).send(err)
    }
})



export default router