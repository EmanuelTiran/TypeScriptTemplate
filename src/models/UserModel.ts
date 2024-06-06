import mongoose from 'mongoose'
import IUser from '../interfaces/IUser'

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        select: false
    },
    permission: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

export default mongoose.model<IUser>('user', userSchema)

