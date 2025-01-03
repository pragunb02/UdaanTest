const mongoose=require('mongoose')

const bookingSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,ref:'Booking',
    },
    classType : {
        type:String,
        required:true
    },
    timeStamp:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Booking',bookingSchema);