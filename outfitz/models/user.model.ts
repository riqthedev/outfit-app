import { model, Schema, Document } from 'mongoose'

interface User {
    name: string;
    email: string;
    password: string;
    stylePreferences: string;
}

const userScheama = new Schema({
    name: { type: String, required: true },
    email: { type: String , unique: true, required: true},
    password: { type: String, required: true },
    stylePreferences: { type: String, ref: "StylePreferences" , required:true}
})


const User = model <User & Document>('User', userScheama)

export default User;