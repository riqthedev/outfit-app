import {model, Schema, Document} from 'mongoose'

interface Outfit {
    user_id: number,
    clothing_item_id: number,
    inspo_picture_id: number,
    combination_name: string,
    creation_data: number
}



const outfitSchema = new Schema({
    user_id: {type: Number, required: true, ref:'User'},
    clothing_item_id: {type: Number, required: true, ref:'Clothes'},
    inspo_picture_id: {type: Number, required: true, ref:'Inspiration'},
    combination_name: { type: String, required: true},
    creation_date: {type: Date, required: true}
})

const Outfit = model <Outfit & Document>('Outfit', outfitSchema)

export default Outfit 