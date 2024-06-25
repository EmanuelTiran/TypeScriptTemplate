import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import { connectToMongo } from './models/connectToMongo';

const app = express()
app.use(cors())
app.use(express.json())

import UserRouter from './routers/UserRouter'

app.use('/users',UserRouter)
connectToMongo()
app.listen(3355,()=>console.log("### Server Is Running on Port 3355 #####"));