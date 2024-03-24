const mongoose = require ('mongoose')

const childProductSchema = new mongoose.Schema({

    content:{
        type: String,
        required: true
    },
     complete:{
        type: Boolean,
        default:false
     },
     createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
     }   
},{timestamps:true})

export const ChildProduct  = mongoose.model('ChildProduct',childProductSchema)