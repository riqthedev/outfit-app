import  { model, Schema, Document } from 'mongoose'


interface Affiliate {
    item_name: string,
    image_url: string,
    affiliate_link: string
}



const affiliateSchema = new Schema ({
    item_name: { type: String, required: true, ref:"Clothes"},
    image_url: {type: String, required: true, ref:"Clothes"},
    affiliate_link: { type: String, required: true}

})




const Affiliate = model <Affiliate & Document>('Affiliate', affiliateSchema)

export default Affiliate;