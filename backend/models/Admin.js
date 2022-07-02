const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },

    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        unique: true,
      },
    
      password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
      },
    
      date: {
        type: Date,
        default: Date.now,
      },
    
    
      stays: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stay'
      }],

});

    
module.exports=mongoose.model('Admin',adminSchema);