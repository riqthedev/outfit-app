import { model, Schema, Document } from "mongoose"

interface Style {
    user_id: number,
    style_tags: string,
    color_preferences: string,
    pattern_preferences: string
}



const styleSchema = new Schema({
    user_id: { type: Number, required: true, ref: "User"},
    style_tags: {type: String, required: true },
    color_preferences: {type: String, required: true },
    pattern_preferences: {type: String, required: true }

})

const Style = model<Style & Document>('Style', styleSchema)


export default Style