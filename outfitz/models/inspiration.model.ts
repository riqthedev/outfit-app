import { model, Schema, Document } from 'mongoose'


interface Inspiration {
    user_id: string,
    image_url: string,
    description: string
}



const inspirationSchema = new Schema ({
    user_id: {type: Number, required: true, ref:"User"},
    image_url: {type: String, required: true},
    description: {type: String, required: true}

})


const Inspiration = model <Inspiration & Document>('Inspiration', inspirationSchema)

export default Inspiration;