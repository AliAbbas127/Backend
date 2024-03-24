const mongoose = require ('mongoose')

const subSchema =  new mongoose.Schema({
 
    content:{
        type:String,
        required:true,
    },
    complete:
    {
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    childProducts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"ChildProduct"                   
    }
] 


},{timestamps:true})

export const SubProduct = mongoose.model("SubProduct", subSchema)   