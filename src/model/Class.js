const mongoose=require('mongoose')

const classSchema=new mongoose.Schema({
    classType : {
        type:String,
        required:true
    },
    capacity : {
        type:Number,
        required:true,
    },
    bookings:[String],
    waitingList :[String]

})

module.exports=mongoose.model('class',classSchema);

