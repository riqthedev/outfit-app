import { model, Schema, Document } from 'mongoose'

interface Clothes {
    user_id: string;
    image_url: string;
    item_type: string;
    color: string;
    pattern: string;
    brand: string;
    purchase_date: Date
}

const clothesSchema = new Schema({
    user_id: {type: Number, required: true, ref:"User"},
    brand: {type: String, required: true},
    color: {type: String, required: true},
    pattern: {type: String},
    purchase_date: {type: Date, required: true},
    item_type: {type: String, required: true},
    image_url: {type: String, required: true},
    
})

const Clothes = model <Clothes & Document>('Clothes', clothesSchema)

export default Clothes;