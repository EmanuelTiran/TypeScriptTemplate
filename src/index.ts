import cors from 'cors';
import express from 'express';
import 'dotenv/config';

const app = express()
app.use(cors())
app.use(express.json())

import UserRouter from './routers/UserRouter'
app.use('/user',UserRouter)

app.listen(3355,()=>console.log("### Server Is Running on Port 3355 #####"));