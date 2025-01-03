const { bookSlot } = require("../services/bookingService");

const bookClass=async(req,res)=>{
    try{
        const {userId,classType}=req.body;
        await bookSlot(userId,classType);
        res.status(200).json({message: "Booking successful"});
    }catch(err){
        console.log("error");
        console.log(err);
    }
};

module.exports={
    bookClass
}