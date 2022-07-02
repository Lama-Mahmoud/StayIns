const mongoose = require('mongoose');


const staySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },
      
    urls:[{
        type:String,
        required:true
    }],
    
    price:{
        type:Number,
        required:true,
    },

    rate:{
        type:Number,
        required:true,
    },
    
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
        required:true
      },
    
    
    });

      
module.exports=mongoose.model('Stay',staySchema);