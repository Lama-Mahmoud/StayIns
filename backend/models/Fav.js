const mongoose = require('mongoose');


const favsSchema = new mongoose.Schema({
    mac: {
        type:String,
    },

    stays:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stay'
    }],
});

    
      
module.exports=mongoose.model('Fav',favsSchema);